'use client'

import React from 'react'
import { CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react'
import { useAudit } from '@/contexts/AuditContext'
import { AnalysisStep } from '@/lib/api'

const AnalysisPanel: React.FC = () => {
  const { state } = useAudit()
  const { analysisSteps, currentStep, isAnalyzing } = state

  const getStepIcon = (status: AnalysisStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success" />
      case 'running':
        return <Clock className="w-5 h-5 text-primary animate-spin" />
      case 'error':
        return <AlertTriangle className="w-5 h-5 text-danger" />
      default:
        return <Info className="w-5 h-5 text-text-muted" />
    }
  }

  const getStepStatus = (index: number) => {
    if (index < currentStep) return 'completed'
    if (index === currentStep) return 'running'
    return 'pending'
  }

  return (
    <div className="bg-surface rounded-xl border border-surface-tertiary p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">
          Analysis Progress
        </h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-text-secondary">
            {isAnalyzing ? 'Analyzing...' : 'Ready'}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {analysisSteps.map((step, index) => {
          const status = getStepStatus(index)
          return (
            <div
              key={step.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                status === 'running' 
                  ? 'bg-surface-secondary border border-primary' 
                  : status === 'completed'
                  ? 'bg-surface-secondary border border-success'
                  : 'bg-surface border border-surface-tertiary'
              }`}
            >
              {getStepIcon(status)}
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-text-primary">
                    {step.name}
                  </h4>
                  <span className="text-xs text-text-muted">
                    {status === 'completed' && '✓'}
                    {status === 'running' && '⟳'}
                    {status === 'pending' && '○'}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
          <span>Progress</span>
          <span>{Math.round((currentStep / analysisSteps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-surface-tertiary rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / analysisSteps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisPanel 