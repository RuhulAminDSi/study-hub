# Basic Physics - Study Notes

## Table of Contents
1. [Electromagnetism](#1-electromagnetism)
2. [Waves and Oscillations](#2-waves-and-oscillations)
3. [Special Relativity](#3-special-relativity)
4. [Quantum Physics](#4-quantum-physics)
5. [Modern Physics](#5-modern-physics)

---

## 1. Electromagnetism

### 1.1 Charge
- **Definition**: Fundamental property of matter causing electromagnetic interaction
- **Types**: Positive (+) e.g., proton; Negative (-) e.g., electron
- **Unit**: Coulomb (C)
- **Law of Conservation**: Charge cannot be created or destroyed, only transferred

### 1.2 Coulomb's Law
- **Formula**: F = k × (q₁ × q₂) / r²
- Force is **attractive** for opposite charges, **repulsive** for like charges

### 1.3 Electric Field (E)
- **Definition**: Region around charged particle where it exerts force on other charges
- **Formula**: E = F/q
- **Unit**: N/C (Newton per Coulomb) or V/m (Volt per meter)
- **Direction**: Away from positive, toward negative charge

### 1.4 Gauss's Law
- **Formula**: ∮E · dA = Q_enclosed / ε₀
- Total electric flux through closed surface is proportional to enclosed charge

### 1.5 Electric Potential (V)
- **Definition**: Work done in bringing unit positive charge from infinity to a point
- **Formula**: V = W/q
- **Unit**: Volt (V)
- **Relation**: E = -dV/dx

### 1.6 Magnetic Field (B)
- **Definition**: Region around moving charge or magnet where magnetic forces act
- **Unit**: Tesla (T)
- **Right-Hand Rule**: Thumb = Current direction, Fingers = Magnetic field direction

### 1.7 Faraday's Law of Electromagnetic Induction
- **Formula**: EMF = -dΦB/dt
- **Key**: Changing magnetic field → Induced voltage → Induced current

### 1.8 Maxwell's Equations

| Equation | Name | Description |
|----------|------|-------------|
| ∇ · E = ρ/ε₀ | Gauss's Law for Electricity | Electric field originates from charges |
| ∇ · B = 0 | Gauss's Law for Magnetism | No magnetic monopoles exist |
| ∇ × E = -∂B/∂t | Faraday's Law | Changing magnetic field induces electric field |
| ∇ × B = μ₀J + μ₀ε₀(∂E/∂t) | Ampere-Maxwell Law | Current and changing E create magnetic field |

---

## 2. Waves and Oscillations

### 2.1 Oscillations
- **Definition**: Back-and-forth repetitive motion around mean position
- **Examples**: Pendulum, mass on spring, AC current

### Types of Oscillations
- **Free Oscillation**: Natural oscillation without external force
- **Forced Oscillation**: External periodic force keeps it oscillating
- **Damped Oscillation**: Amplitude decreases due to friction/resistance
- **Undamped Oscillation**: No energy loss, amplitude constant
- **Resonance**: External frequency = natural frequency → Maximum amplitude

### Key Terms
- **Amplitude (A)**: Maximum displacement from mean position (meter)
- **Time Period (T)**: Time for one complete oscillation (seconds)
- **Frequency (f)**: Number of oscillations per second (Hz), f = 1/T
- **Angular Frequency (ω)**: ω = 2πf (radians/sec)
- **Phase (φ)**: Position of oscillation at any instant (radians)

### 2.2 Simple Harmonic Motion (SHM)
- **Formula**: F = -kx (restoring force proportional to displacement)
- **Equation**: x(t) = A sin(ωt + φ)

### 2.3 Waves
- **Definition**: Disturbance that transfers energy without transferring matter

### Types of Waves
- **Mechanical Waves**: Require medium (sound, water waves)
- **Electromagnetic Waves**: Do not need medium (light, radio)
- **Transverse Waves**: Particle motion perpendicular to wave direction
- **Longitudinal Waves**: Particle motion parallel to wave direction

### Wave Properties
- **Wavelength (λ)**: Distance between two crests (meter)
- **Frequency (f)**: Number of cycles per second (Hertz)
- **Wave speed (v)**: v = fλ
- **Amplitude (A)**: Height of crest (energy level)

### Wave Phenomena
- **Reflection**: Wave bounces back from surface
- **Refraction**: Wave bends passing into another medium
- **Diffraction**: Wave bends around obstacles
- **Interference**: Two waves overlap to form resultant wave
- **Standing Waves**: Appear stationary due to interference

---

## 3. Special Relativity

### 3.1 Two Postulates
1. **Principle of Relativity**: Laws of physics identical in all inertial frames
2. **Constancy of Speed of Light**: c = 3 × 10⁸ m/s same for all observers

### 3.2 Consequences

#### a) Time Dilation
- **Formula**: t = t₀ / √(1 - v²/c²)
- Moving clocks run slower

#### b) Length Contraction
- **Formula**: L = L₀ √(1 - v²/c²)
- Moving objects appear shorter in direction of motion

#### c) Relativity of Simultaneity
- Events simultaneous in one frame may not be simultaneous in another

#### d) Mass-Energy Equivalence
- **Formula**: E = mc²
- Mass and energy are interchangeable

#### e) Relativistic Mass
- **Formula**: m = m₀ / √(1 - v²/c²)
- Mass increases with velocity

### 3.3 Applications
- GPS systems (account for time dilation)
- Particle accelerators
- Nuclear energy

---

## 4. Quantum Physics

### 4.1 Electromagnetic Waves
- Oscillations of electric and magnetic fields traveling through space
- Do not require medium (can travel in vacuum)
- **Formula**: c = λν

### EM Spectrum
| Type | Wavelength |
|------|------------|
| Radio waves | > 1 m |
| Microwaves | 1 m - 1 mm |
| Infrared | 1 mm - 700 nm |
| Visible light | 700-400 nm |
| Ultraviolet | 400-10 nm |
| X-rays | 10-0.01 nm |
| Gamma rays | < 0.01 nm |

### 4.2 Photoelectric Effect
- Light shining on metal surface emits electrons
- **Key Facts**:
  - No electrons below threshold frequency
  - Energy depends on frequency, not intensity
- **Einstein's Explanation**: Light as particles (photons)
- **Formula**: hν = φ + ½mv²
  - h = 6.626 × 10⁻³⁴ Js (Planck's constant)
  - φ = work function

### 4.3 Quantum Theory of Light
- **Dual Nature**: Wave and particle properties
- **Wave nature**: Interference, diffraction, polarization
- **Particle nature**: Photoelectric effect, Compton effect

### 4.4 X-rays and Diffraction
- Produced when high-speed electrons strike metal target
- **Bragg's Law**: nλ = 2d sinθ

### 4.5 Compton Effect
- X-ray scattering by electrons causes change in wavelength
- **Formula**: Δλ = h/(mₑc) × (1 - cosθ)

---

## 5. Modern Physics

### 5.1 De Broglie Waves
- **Hypothesis**: Particles have wave-like properties
- **Formula**: λ = h/p (p = momentum)

### 5.2 Phase and Group Velocity
- **Phase velocity**: vₚ = ω/k
- **Group velocity**: vg = dω/dk

### 5.3 Wave Function
- Describes quantum state of a particle
- Schrödinger wave equation

---

## Quick Reference

| Concept | Formula | Unit |
|---------|---------|------|
| Coulomb's Law | F = kq₁q₂/r² | N |
| Electric Field | E = F/q | N/C or V/m |
| Gauss's Law | ∮E·dA = Q/ε₀ | - |
| Electric Potential | V = W/q | Volt |
| Wave Speed | v = fλ | m/s |
| Time Dilation | t = t₀/√(1-v²/c²) | s |
| Mass-Energy | E = mc² | J |
| Photoelectric | hν = φ + ½mv² | J |
| de Broglie | λ = h/p | m |

---

*Last Updated: 2026*
*Subject: Basic Physics*
