export interface SynthState {
  osc_type: OscillatorType
  amp_env: EnvelopeParams
  distortion: number
  lfo: LFOParams
  filter: FilterParams
}

export interface EnvelopeParams {
  attack: number
  decay: number
  sustain: number
  release: number
}

export interface LFOParams {
  frequency: string
  min: number
  max: number
}

export interface FilterParams {
  frequency: number
  type: string
}