'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { auditService, AuditResponse, AnalysisStep } from '@/lib/api'

interface AuditState {
  code: string
  isAnalyzing: boolean
  analysisSteps: AnalysisStep[]
  currentStep: number
  auditResult: AuditResponse | null
  error: string | null
}

type AuditAction =
  | { type: 'SET_CODE'; payload: string }
  | { type: 'START_ANALYSIS' }
  | { type: 'UPDATE_STEPS'; payload: AnalysisStep[] }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'SET_RESULT'; payload: AuditResponse }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'RESET' }

const initialState: AuditState = {
  code: `pragma solidity ^0.8.0;

contract VulnerableBank {
    mapping(address => uint) balances;
    
    function withdraw() public {
        msg.sender.call{value: balances[msg.sender]}("");
        balances[msg.sender] = 0;
    }
}`,
  isAnalyzing: false,
  analysisSteps: [],
  currentStep: 0,
  auditResult: null,
  error: null,
}

function auditReducer(state: AuditState, action: AuditAction): AuditState {
  switch (action.type) {
    case 'SET_CODE':
      return { ...state, code: action.payload }
    
    case 'START_ANALYSIS':
      return { 
        ...state, 
        isAnalyzing: true, 
        error: null,
        auditResult: null,
        currentStep: 0
      }
    
    case 'UPDATE_STEPS':
      return { ...state, analysisSteps: action.payload }
    
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload }
    
    case 'SET_RESULT':
      return { 
        ...state, 
        auditResult: action.payload, 
        isAnalyzing: false 
      }
    
    case 'SET_ERROR':
      return { 
        ...state, 
        error: action.payload, 
        isAnalyzing: false 
      }
    
    case 'RESET':
      return initialState
    
    default:
      return state
  }
}

interface AuditContextType {
  state: AuditState
  setCode: (code: string) => void
  startAudit: () => Promise<void>
  reset: () => void
}

const AuditContext = createContext<AuditContextType | undefined>(undefined)

export function AuditProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(auditReducer, initialState)

  const setCode = (code: string) => {
    dispatch({ type: 'SET_CODE', payload: code })
  }

  const startAudit = async () => {
    try {
      dispatch({ type: 'START_ANALYSIS' })
      
      // Initialize analysis steps
      const initialSteps: AnalysisStep[] = [
        {
          id: 'syntax',
          name: 'Syntax Analysis',
          status: 'pending',
          description: 'Checking Solidity syntax and compilation'
        },
        {
          id: 'slither',
          name: 'Slither Analysis',
          status: 'pending',
          description: 'Running automated security checks'
        },
        {
          id: 'gpt4',
          name: 'GPT-4 Analysis',
          status: 'pending',
          description: 'AI-powered vulnerability detection'
        },
        {
          id: 'codebert',
          name: 'CodeBERT Analysis',
          status: 'pending',
          description: 'Deep learning code analysis'
        },
        {
          id: 'report',
          name: 'Report Generation',
          status: 'pending',
          description: 'Compiling comprehensive audit report'
        }
      ]
      
      dispatch({ type: 'UPDATE_STEPS', payload: initialSteps })
      
      // Simulate step-by-step analysis
      for (let i = 0; i < initialSteps.length; i++) {
        // Update current step
        dispatch({ type: 'SET_CURRENT_STEP', payload: i })
        
        // Update step status to running
        const updatedSteps = [...initialSteps]
        updatedSteps[i].status = 'running'
        dispatch({ type: 'UPDATE_STEPS', payload: updatedSteps })
        
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Update step status to completed
        updatedSteps[i].status = 'completed'
        dispatch({ type: 'UPDATE_STEPS', payload: updatedSteps })
      }
      
      // Perform actual audit
      const result = await auditService.auditContract(state.code)
      dispatch({ type: 'SET_RESULT', payload: result })
      
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: error instanceof Error ? error.message : 'An error occurred' 
      })
    }
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <AuditContext.Provider value={{ state, setCode, startAudit, reset }}>
      {children}
    </AuditContext.Provider>
  )
}

export function useAudit() {
  const context = useContext(AuditContext)
  if (context === undefined) {
    throw new Error('useAudit must be used within an AuditProvider')
  }
  return context
} 