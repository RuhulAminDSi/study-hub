Date: Sat, 18 Oct 2025 11:10:14 +0000 (UTC)
Message-ID: 
Subject: Exported From Confluence
MIME-Version: 1.0
Content-Type: multipart/related; 
	boundary="----=_Part_6_1802889261.1760785814076"

------=_Part_6_1802889261.1760785814076
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable
Content-Location: file:///C:/exported.html

    
    Electrical Circuits
    
    
        
            1024x640
            72
            
        
        
            Print
            90
            
        
    
    
    
                
    

    # Electrical Circuits

    
        
- 
Circuit variables and elements: voltage, current, power, energy, indepen=
dent and dependent sources, resistance

- 
Basic laws of electrical circuits: Ohm's law, Kirchoff s current=
 law (KCL) and Kirchoff s voltage law (KVL)

- 
Simple resistive circuits: scries and parallel circuits, voltage and cur=
rent division, source transformation

- 
Methods of analysis: nodal and mesh analysis

- 
Circuit theorems: Thevenin's, Norton's and superposition=
 theorems, maximum power transfer and reciprocity theorem

- 
Capacitors and inductors: inductors and capacitors, their characteristic=
s, series-parallel combination of inductors and capacitors; RLC Transients

- 
Series and parallel AC circuits

- 
impedance and phasor diagram, series and parallel networks, voltage divi=
der rule, admittance and susceptance

- 
mesh and nodal analysis, wye-delta and delta-wye conversions

- 
superposition theorem, Thevenin's theorem, Norton's theo=
rem, maximum power transfer theorem.

- 
Circuit variables and elements: voltage, current, power, energy, indepen=
dent and dependent sources, resistance

Here's a concise guide to **basic circuit variables and el=
ements** with simple explanations and key formulas:

---

## =
📙 Fundamental Electrical Quantities

| Quantity | Symbol | Unit | Description | Key Relation |
|---|---|---|---|---|
| **Voltage** | VV or v(t)v(t) | Volt (V) | Electrical "pressure" or potential difference between tw=
o points. | V=3DW/QV =3D W/Q (work per charge) |
| **Current** | II or i(t)i(t) | Ampere (A) | Rate of flow of electric charge. | I=3DdQ/dtI =3D dQ/dt |
| **Power** | PP | Watt (W) | Rate of energy transfer or conversion. | P=3DV=C3=97IP =3D V \times I |
| **Energy** | WW | Joule (J) | Total electrical work done over time. | W=3D=E2=88=ABP=E2=80=89dtW =3D \int P\, dt |

*Time-domain notation:* lower-case letters like v(t)v(t), i(t)i(t=
) indicate instantaneous values.

---

## 📙 Circ=
uit Elements

### 1. **Sources**

Provide electrical energy to a circuit.

**Independent Sources**

- 
Output is **fixed** or set by time, not affected by the cir=
cuit.

- 
Types:

**Independent Voltage Source**: delivers a specified voltag=
e.

- 
**Independent Current Source**: delivers a specified curren=
t.

**Dependent (Controlled) Sources**

- 
Output **depends on another circuit variable** (voltage or =
current elsewhere).

- 
Types:

**Voltage-Controlled Voltage Source (VCVS)**

- 
**Current-Controlled Voltage Source (CCVS)**

- 
**Voltage-Controlled Current Source (VCCS)**

- 
**Current-Controlled Current Source (CCCS)**

Symbolically, a dependent source is usually drawn with a diamond shape.

---

### 2. **Passive Elements=
**

These **consume or store** energy rather than generate it.
*Basic example covered here:* **Resistor**

- 
**Resistance (R)**: Opposition to current flow.

- 
**Ohm's Law**: V=3DI=C3=97RV =3D I \times R

Units: Ohm (=CE=A9)

- 
Power in resistor: P=3DI2R=3DV2RP =3D I^2 R =3D \dfrac{V^2}{R}

*(Capacitors and inductors are also passive elements, but you asked s=
pecifically for resistance.)*

---

## =F0=9F=
=94=B9 Relationships & Examples

- 
**Instantaneous Power:** p(t)=3Dv(t)=E2=8B=85i(t)p(t) =3D v=
(t) \cdot i(t)

Positive p(t)p(t) -> element absorbs power.

Negative p(t)p(t) -> element delivers power.

- 
**Energy in a Time Interval [t=E2=82=81, t=E2=82=82]:**

W=3D=E2=88=ABt1t2v(t)=E2=80=89i(t)=E2=80=89dtW =3D \int_{t_1}^{t_2} v(t) \,=
 i(t) \, dt

---

## Quick Real-World Pictu=
re

- 
**Voltage:** Like water pressure in a pipe.

- 
**Current:** The flow of water itself.

- 
**Resistance:** Narrowness or friction in the pipe.

**Power:** How fast energy is being delivered (like how qui=
ckly the water wheel spins).

- 
**Energy:** Total amount of work done over time (total wate=
r turned into mechanical work).

- 
**Independent Source:** A steady water pump.

- 
**Dependent Source:** A pump whose output changes depending=
 on another pressure/flow in the system.

---

These are the foundational concepts you'll use for analyzing any=
 DC or AC electrical circuit.

- 
Basic laws of electrical circuits: Ohm's law, Kirchoff s current=
 law (KCL) and Kirchoff s voltage law (KVL)

Here are the **basic electrical circuit laws** explained cl=
early with formulas and simple examples:

---

## 1=EF=B8=
=8F **Ohm's Law**

**Statement:**

The voltage (VV) across a resistor is directly proportional to the current =
(II) through it, if temperature and other physical conditions remain consta=
nt.

V=3DI=C3=97R\boxed{ V =3D I \times R }

- 
**V**: Voltage (Volts, V)

- 
**I**: Current (Amperes, A)

- 
**R**: Resistance (Ohms, =CE=A9)

**Rearranged forms:**

I=3DVR,R=3DVII =3D \frac{V}{R}, \qquad R =3D \frac{V}{I}

**Example:**

A 10 =CE=A9 resistor with 5 V across it =E2=87=92 Current =3D 5/10=3D0.55/1=
0 =3D 0.5 A.

---

## 2 **Kirchhoff's Current Law (KCL)

Statement:**

The algebraic sum of currents entering a node (junction) is zero.

Or: **Total current entering a node =3D Total current leaving that no=
de.**

=E2=88=91Iin=3D=E2=88=91Iout\boxed{\sum I_{in} =3D \sum I_{out}}

or equivalently

=E2=88=91Ik=3D0\boxed{\sum I_k =3D 0}

(where currents entering are positive and leaving negative, or vice vers=
a, but keep a consistent sign convention).

**Physical basis:** Conservation of electric charge.

**Example:**

At a junction: 2 A enters from left, 1 A enters from top, and currents leav=
e through two wires I=E2=82=81 and I=E2=82=82.

KCL: 2+1=3DI1+I22 + 1 =3D I_1 + I_2.

If I=E2=82=81 =3D 1.5 A =E2=87=92 I=E2=82=82 =3D 1.5 A.

---

## 3 **Kirchhoff's Voltage Law (KVL)

Statement:**

The algebraic sum of all voltages around any closed loop in a circuit is ze=
ro.

Or: **Sum of voltage rises =3D Sum of voltage drops**.

=E2=88=91Vk=3D0\boxed{\sum V_k =3D 0}

**Physical basis:** Conservation of energy in an electrical=
 loop.

**Example:**

A loop with a 12 V battery and two resistors (4 =CE=A9 and 2 =CE=A9) in ser=
ies carrying current I:

Voltage drops: 4I+2I=3D6I4I + 2I =3D 6I.

KVL: 12-6I=3D0=E2=87=92I=3D2A12 - 6I =3D 0 \Rightarrow I =
=3D 2 A.

---

## Quick Analogy

- 
**Ohm's law**: Like water pressure vs. flow through=
 a pipe with friction.

- 
**KCL**: Water flow at a junction--what comes in mus=
t go out.

- 
**KVL**: Around a closed pipe loop, all pressure gains and =
drops balance out.

---

These three laws--**Ohm's law, KCL, and KVL--are the foundation of all circuit analysis techniques such as nod=
e-voltage method, mesh-current method, and more.

- 
Simple resistive circuits: scries and parallel circuits, voltage and cur=
rent division, source transformation

Here's a clear, step-by-step guide to simple resistive c=
ircuits** and the key analysis techniques you asked about.

---

## =
1 Series and Parallel Circuits

### 📙 Series

*Components share the **same current** because there is =
only one path.*

- 
**Equivalent Resistance**

Req=3DR1+R2+=E2=8B=AF+RnR_\text{eq} =3D R_1 + R_2 + \dots + R_n

- 
Voltage divides across each resistor:

Vk=3DI=C3=97RkV_k =3D I \times R_k

### 📙 Parallel
*Components share the **same voltage** because each end =
is directly connected.*

- 
**Equivalent Resistance**

1Req=3D1R1+1R2+=E2=8B=AF+1Rn\frac{1}{R_\text{eq}} =3D \frac{1}{R_1} + \f=
rac{1}{R_2} + \dots + \frac{1}{R_n}

- 
Current divides among branches:

Ik=3DVRkI_k =3D \frac{V}{R_k}

**Tip:** Two resistors only:

Req=3DR1R2R1+R2R_\text{eq} =3D \frac{R_1 R_2}{R_1 + R_2}

---

## 2=EF=
=B8=8F Voltage Division Rule

Used in **series** circuits.

For total voltage VV across series resistors R1,R2,...R_1, R_2, \d=
ots:

Vk=3DV=C3=97RkR1+R2+...V_k =3D V \times \frac{R_k}{R_1 + R_2 + \do=
ts}

**Example:**

10 V across 2 k=CE=A9 and 3 k=CE=A9 in series ->

Voltage across 3 k=CE=A9 =3D 10=C3=9735=3D6V10 \times \frac{3}{5} =3D 6 V.

---

## 3=EF=
=B8=8F Current Division Rule

Used in **parallel** circuits.

For total current II entering two parallel resistors R1R_1 and R2R_2:
I1=3DI=C3=97R2R1+R2,I2=3DI=C3=97R1R1+R2I_1 =3D I \times \frac{R_2}{R_1 +=
 R_2}, \qquad I_2 =3D I \times \frac{R_1}{R_1 + R_2}

*(Notice the current in one branch is proportional to the **oth=
er** branch's resistance.)*

---

## 4=EF=
=B8=8F Source Transformation

Allows you to **replace**:

- 
a **voltage source VsV_s** in series with a resistor RR
=
**=E2=87=84**

- 
a **current source IsI_s** in parallel with the same resist=
or RR,

provided:

Is=3DVsRorVs=3DIs=C3=97RI_s =3D \frac{V_s}{R} \quad\text{or}\quad V_s =
=3D I_s \times R

This simplifies circuit analysis--handy for Thevenin/Norton equiv=
alents.

**Example:**

A 12 V source in series with 4 =CE=A9 -> equivalent to a 3 A current=
 source in parallel with 4 =CE=A9.

---

## Quick Design Intuition

| Feature | Series | Parallel |
|---|---|---|
| Current | Same through all elements | Splits; sum equals source current |
| Voltage | Splits across each element | Same across all branches |
| Equivalent R | Adds directly | Inverse-sum formula |
| Power Sharing | Each resistor dissipates I2RI^2 R | Each dissipates V2R\frac{V^2}{R} |

---

Putting It All Together
To analyze a simple resistive network:

- 
**Combine series/parallel** resistors step by step.

Apply **Ohm's law** to find total current or voltag=
e.

- 
Use **voltage division** or **current division to find individual branch values.

- 
If sources are awkward, perform a source transformation**=
 to simplify.

These four tools--**series/parallel reduction, voltage divi=
sion, current division, and source transformation**--form the=
 everyday toolkit for DC circuit analysis.

- 
Methods of analysis: nodal and mesh analysis

Here's a **clear guide** to the two fundamental cir=
cuit-analysis methods:

---

1 Nodal (Node-Voltage) Analysis

**Goal:** Find the **voltage at each node** (r=
elative to a reference/ground) using **KCL**.

Steps

- 
**Choose a reference node** (ground).

- 
**Label voltages** V1,V2,...V_1, V_2, ... at th=
e remaining nodes.

- 
**Write KCL** at each non-reference node:

*Sum of currents leaving a node =3D 0.*

- 
Express each branch current as (Vnode=E2=88=92Vneighbor)/R(V_\text{node}=
 - V_\text{neighbor})/R.

- 
Solve the simultaneous equations.

---

**Example**

   10 V
(+) =E2=94=80=E2=94=80R1=3D2k=E2=94=80=E2=97=8F=E2=94=80R2=3D3k=E2=94=80(gr=
ound)
            |
           R3=3D6k
            |
         (ground)

- 
Let node voltage =3D V1V_1.

- 
KCL at node:

V1=E2=88=92102000+V1=E2=88=9203000+V1=E2=88=9206000=3D0\frac{V_1 - 10}{2=
000} + \frac{V_1 - 0}{3000} + \frac{V_1 - 0}{6000} =3D 0

- 
Solve:

V1(12000+13000+16000)=3D102000V_1 \left(\frac{1}{2000}+\frac{1}{3000}+\f=
rac{1}{6000}\right) =3D \frac{10}{2000}

=E2=87=92 V1=E2=89=882.7 VV_1 =E2=89=88 2.7\ \text{V}.

---

## 2 Mesh (Loop-Current) Analysis

**Goal:** Find the **current in each independent loop=
** using **KVL**.

### Steps

- 
**Identify meshes** (smallest closed loops).

- 
**Assign a mesh current** I1,I2,...I_1, I_2, =E2=80=
=A6 clockwise or counter-clockwise.

- 
**Write KVL** around each mesh:

*Sum of voltage rises and drops =3D 0.*

- 
Shared components carry the algebraic difference of mesh currents.

Solve the linear equations.

---

**Example**

   R1=
=3D4=CE=A9
 =E2=94=8C=E2=94=80=E2=94=80=E2=94=80=E2=94=80=E2=94=80R2=3D6=CE=A9=E2=94=
=80=E2=94=80=E2=94=80=E2=94=80=E2=94=80=E2=94=90
 |               |
10V            5V
 |               |
 =E2=94=94=E2=94=80=E2=94=80=E2=94=80=E2=94=80=E2=94=80R3=3D8=CE=A9=E2=94=
=80=E2=94=80=E2=94=80=E2=94=80=E2=94=80=E2=94=98

- 
Two meshes: left (I=E2=82=81) and right (I=E2=82=82).

- 
KVL:

Left: 10 =E2=88=92 4I=E2=82=81 =E2=88=92 6(I=E2=82=81 =E2=88=92 I=E2=82=
=82) =3D 0

- 
Right: 5 =E2=88=92 8I=E2=82=82 =E2=88=92 6(I=E2=82=82 =E2=88=92 I=E2=82=
=81) =3D 0

- 
Solve simultaneously for I=E2=82=81 and I=E2=82=82.

---

## Quick Comparison

| Feature | Nodal | Mesh |
|---|---|---|
| Main Unknowns | Node **voltages** | Loop **currents** |
| Fundamental Law | Kirchhoff's **Current** Law (KCL) | Kirchhoff's **Voltage** Law (KVL) |
| Best for | Circuits with **many voltage sources**, few nodes | Circuits with **many current sources**, few meshes |
| Works With | Any planar circuit (with some tweaks for non-planar) | Planar circuits only |

---

### Practical Tip

- 
**Few nodes, many loops? -> Nodal.**

- 
**Few loops, many nodes? -> Mesh.**

Both methods are systematic ways to turn a schematic into a set of simul=
taneous linear equations you can solve by hand or using software.

- 
Circuit theorems: Thevenin's, Norton's and superposition=
 theorems, maximum power transfer and reciprocity theorem

Here's a **concise, practical guide** to the most i=
mportant **circuit theorems** you listed--each with def=
inition, steps, and a quick example idea.

---

## =
1 Thevenin's Theorem

**Idea:** Any linear two-terminal network of sources and re=
sistors can be replaced by an **equivalent voltage source (Vth) in series with an equivalent resistance (Rth)**.

**Steps**

- 
**Find Vth**: Open-circuit the load terminals and calculate=
 the voltage across them.

- 
**Find Rth**: Deactivate all independent sources

Voltage source -> short circuit

- 
Current source -> open circuit

Then find the resistance seen at the load terminals.

- 
Replace the whole network with **Vth in series with Rth** a=
nd reattach the load.

**Use:** Simplifies complex networks when you vary the load=
 resistor.

---

## 2=
 Norton's Theorem

**Dual of Thevenin:** Any linear two-terminal network can b=
e replaced by a **current source (In)** in parallel with a resistance (Rn).

- 
**In** =3D short-circuit current through the output termina=
ls.

- 
**Rn** =3D same as Rth (because it's the same netwo=
rk).

- 
Conversion:

Vth=3DIn=C3=97RnV_{th} =3D I_n \times R_{n}

---

## 3=EF=
=B8=8F Superposition Theorem

**Idea:** In a linear circuit with **multiple indepen=
dent sources**, the response (voltage or current) is the **alg=
ebraic sum** of the responses caused by each source acting **a=
lone**.

**Steps**

- 
Consider **one source at a time**.

- 
Deactivate others:

Voltage source -> short circuit

- 
Current source -> open circuit

- 
Calculate the contribution from that source.

- 
Add all individual contributions.

**Tip:** Only works for **linear** elements (r=
esistors, capacitors, inductors in linear region).

---

## 4 Maximum Power Transfer Theorem

**Statement:** A load receives **maximum power from a linear source when

RL=3DRthR_L =3D R_{th}

(where RthR_{th} is the Thevenin resistance as seen from the load).

- 
Maximum power**:

Pmax=3DVth24RthP_{max} =3D \frac{V_{th}^2}{4 R_{th}}

- 
Useful for **communication circuits** and **impedance=
 matching**.

---

## 5=EF=B8=
=8F Reciprocity Theorem

**Statement:** In a linear, bilateral network (no dependent=
 sources), the current at a point B due to a voltage applied at point A is =
**the same** as the current at A if the same voltage is applie=
d at B.

IA->B=E2=88=A3VA=3DIB->A=E2=88=A3VBI_{A\to B} \big|_{V_A} =
=3D I_{B\to A} \big|_{V_B}

- 
Mainly used in network verification and antenna/coupling analysis.

---

### Quick Example Ideas

**Thevenin/Norton**: Replace a complicated resistor network=
 feeding a single load resistor--calculate easy load current.

**Superposition**: Circuit with 10 V source and 5 A current=
 source together--find branch currents by activating each separately=
.

- 
**Maximum Power Transfer**: Audio amplifier output matched =
to speaker impedance.

- 
**Reciprocity**: Two-port network--swap source and m=
easurement points and observe same current.

---

These theorems are standard tools in circuit analysis and design: they s=
implify networks, help with impedance matching, and verify linear system be=
havior.

- 
Capacitors and inductors: inductors and capacitors, their characteristic=
s, series-parallel combination of inductors and capacitors; RLC Transients

Here's a **complete, exam-ready overview** of capacitors, inductors, their combinations, and RLC transients:

---

## 1=E2=
=83=A3 Capacitors

### Characteristics

- 
**Stores energy in an electric field**

i(t)=3DCdv(t)dti(t) =3D C \frac{d v(t)}{dt}

- 
Voltage cannot change **instantaneously** (because that wou=
ld require infinite current).

- 
Energy stored:

W=3D12CV2W =3D \tfrac{1}{2} C V^2

---

## 2=E2=83=
=A3 Inductors

### Characteristics

- 
**Stores energy in a magnetic field**

v(t)=3DLdi(t)dtv(t) =3D L \frac{d i(t)}{dt}

- 
Current cannot change **instantaneously** (would need infin=
ite voltage).

- 
Energy stored:

W=3D12LI2W =3D \tfrac{1}{2} L I^2

---

## 3 Series & Parallel Combinations

| Element | Series | Parallel |
|---|---|---|
| **Capacitors** | 1Ceq=3D=E2=88=911Ck\displaystyle \frac{1}{C_{eq}} =3D \sum \frac{1}{C_k}= | Ceq=3D=E2=88=91CkC_{eq} =3D \sum C_k |
| **Inductors** | Leq=3D=E2=88=91LkL_{eq} =3D \sum L_k | 1Leq=3D=E2=88=911Lk\displaystyle \frac{1}{L_{eq}} =3D \sum \frac{1}{L_k}= |

*Opposite patterns:*

- 
Capacitors add like resistors **in parallel**.

- 
Inductors add like resistors **in series**.

---

## 4 RLC Transients (Step Response)

When a switch changes position, voltages and currents **transition=
** over time.

Two common circuits:

### a) **RC Circuit=
 (first order)**

Charging a capacitor through R from a DC source VsV_s:

vC(t)=3DVs(1=E2=88=92e=E2=88=92t/RC)v_C(t) =3D V_s \left(1 - e^{-t/RC}\r=
ight)

Discharge:

vC(t)=3DV0e=E2=88=92t/RCv_C(t) =3D V_0 e^{-t/RC}

Time constant =CF=84=3DRC\tau =3D R C.

---

### b) **RL Circuit=
 (first order)**

Current rise with source VsV_s:

iL(t)=3DVsR(1=E2=88=92e=E2=88=92tR/L)i_L(t) =3D \frac{V_s}{R}\left(1 - e=
^{-tR/L}\right)

Decay:

iL(t)=3DI0e=E2=88=92tR/Li_L(t) =3D I_0 e^{-tR/L}

Time constant =CF=84=3DLR\tau =3D \frac{L}{R}.

---

### c) **RLC Circ=
uit (second order)**

Series R-L-C with step input:

d2idt2+RLdidt+1LCi=3DVsL=CE=B4(t)\frac{d^2 i}{dt^2} + \frac{R}{L}\frac{d=
i}{dt} + \frac{1}{LC} i =3D \frac{V_s}{L}\delta(t)

Define:

- 
Natural frequency: omega0=3D1LC\omega_0 =3D \frac{1}{\sqrt{LC}}

Damping factor: alpha=3DR2L\alpha =3D \frac{R}{2L}

Cases:

| Condition | Response |
|---|---|
| **Underdamped** (alphaomega0\alpha > \omega_0)

Two real exponential decays, no oscillation. |

---

## Key Takeaways

- 
**Capacitor voltage** and **inductor current**=
 are continuous across a switching instant.

- 
Combine C and L just like resistors but with *opposite* series/pa=
rallel rules.

- 
RLC transients depend on **damping** and can oscillate if u=
nderdamped.

This foundation lets you tackle charging/discharging problems, filter de=
sign, and AC resonance analysis with confidence.

- 
Series and parallel AC circuits

Here's a **clear, exam-friendly guide** to **=
series and parallel AC circuits**--how to analyze them and wh=
at to watch for.

---

## 1=EF=
=B8=8F Basics of AC Quantities

- 
**Voltage/Current** are sinusoidal:

v(t)=3DVmsin=E2=81=A1(omegat+=CE=B8v),i(t)=3DImsin=E2=81=A1(omegat+=CE=
=B8i)v(t) =3D V_\mathrm{m}\sin(\omega t + \theta_v),\qquad i(t) =3D I_\math=
rm{m}\sin(\omega t + \theta_i)

- 
Use **RMS values** and **phasors** (complex nu=
mbers) for steady-state analysis.

- 
**Impedance ZZ** (generalized resistance):

Resistor: ZR=3DRZ_R =3D R (angle 0=C2=B0)

- 
Inductor: ZL=3DjomegaLZ_L =3D j\omega L (angle +90=C2=B0)

- 
Capacitor: ZC=3D1jomegaCZ_C =3D \dfrac{1}{j\omega C} (angle -90=
=C2=B0)

Current-voltage relationship:

I=E2=80=BE=3DV=E2=80=BEZ=E2=80=BE\underline{I} =3D \frac{\underline{V}}{=
\underline{Z}}

---

## 2=EF=B8=
=8F Series AC Circuits

All elements share **same current**, voltages add **p=
hasorially**.

- 
**Total impedance**

Zeq=3DR+j(omegaL=E2=88=921omegaC)Z_\text{eq} =3D R + j(\omega L - \tfr=
ac{1}{\omega C})

(for an RLC series circuit)

- 
Magnitude:

=E2=88=A3Z=E2=88=A3=3DR2+(omegaL=E2=88=921omegaC)2|Z| =3D \sqrt{R^2 + =
\bigl(\omega L - \tfrac{1}{\omega C}\bigr)^2}

- 
Phase angle (between voltage and current):

=CF=95=3Dtan=E2=81=A1=E2=88=921=E2=80=89=E2=81=A3(omegaL=E2=88=921=CF=
=89CR)\phi =3D \tan^{-1}\!\left(\frac{\omega L - \frac{1}{\omega C}}{R}\rig=
ht)

*Positive* =E2=87=92 circuit is **inductive** (curre=
nt lags).
*Negative* =E2=87=92 **capacitive** (curre=
nt leads).

- 
**Resonance (series)** when omegaL=3D1/omegaC\omega L =3D=
 1/\omega C -> purely resistive, current maximum.

---

## 3=EF=B8=
=8F Parallel AC Circuits

All elements share **same voltage**, currents add **p=
hasorially**.

- 
Easier to work with **admittance Y=3D1/ZY =3D 1/Z**:

Resistor: YR=3D1/RY_R =3D 1/R

- 
Inductor: YL=3D1/(jomegaL)=3D=E2=88=92j/(omegaL)Y_L =3D 1/(j\omega L) =
=3D -j/( \omega L)

- 
Capacitor: YC=3DjomegaCY_C =3D j\omega C

- 
**Total admittance**

Yeq=3DYR+YL+YCY_\text{eq} =3D Y_R + Y_L + Y_C

and

Zeq=3D1YeqZ_\text{eq} =3D \frac{1}{Y_\text{eq}}

- 
Phase angle is determined by the net susceptance (imaginary part of Y).

- 
**Parallel resonance (anti-resonance)** occurs when total i=
maginary part of Y =3D 0 -> current minimum.

---

## 4=EF=B8=
=8F Power in AC Circuits

- 
**Real power** P=3DVrmsIrmscos=E2=81=A1=CF=95P =3D V_\text{=
rms} I_\text{rms} \cos \phi (watts)

- 
**Reactive power** Q=3DVrmsIrmssin=E2=81=A1=CF=95Q =3D V_\t=
ext{rms} I_\text{rms} \sin \phi (VAR)

- 
**Apparent power** S=3DVrmsIrmsS =3D V_\text{rms} I_\text{r=
ms} (VA)

- 
**Power factor** =3D cos=E2=81=A1=CF=95\cos \phi (leading i=
f capacitive, lagging if inductive).

---

## 5=E2=
=83=A3 Quick Example

**Series RLC:**

R =3D 20 =CE=A9, L =3D 0.1 H, C =3D 100 =C2=B5F, f =3D 50 Hz.

omega=3D2=CF=8050=3D314 rad/s\omega =3D 2\pi 50 =3D 314\ \text{rad/s}=
.

- 
XL=3DomegaL=3D31.4 =CE=A9X_L =3D \omega L =3D 31.4\ =CE=A9

XC=3D1/(omegaC)=3D31.8 =CE=A9X_C =3D 1/(\omega C) =3D 31.8\ =CE=A9=

- 
Net reactance =E2=89=88 -0.4 =CE=A9 (slightly capacitive)

Z=E2=89=88202+0.42=E2=89=8820.0 =CE=A9Z =E2=89=88 \sqrt{20^2 + 0.4^=
2} =E2=89=88 20.0\ =CE=A9

Nearly at resonance.

---

### Key Takeaways

- 
**Series AC**: Same current, add impedances directly.

**Parallel AC**: Same voltage, add **admittances (or reciprocals of impedances).

- 
Use phasor diagrams to visualize phase relationships.

- 
Resonance can dramatically change current or voltage depending on config=
uration.

These tools let you analyze any R, L, C network under sinusoidal steady-=
state conditions.

- 
impedance and phasor diagram, series and parallel networks, voltage divi=
der rule, admittance and susceptance

Here's a complete explanation** of the requested =
AC-circuit concepts, kept clear and practical.

---

## 1=E2=83=
=A3 Impedance

In AC circuits, **impedance ZZ** is the generalized =E2=80=
=9Cresistance" to sinusoidal current:

Z=3DR+jX\boxed{Z =3D R + jX}

- 
**R** =3D resistance (real part, in ohms)

- 
**X** =3D reactance (imaginary part, in ohms)

Inductive reactance XL=3D+omegaLX_L =3D +\omega L

- 
Capacitive reactance XC=3D=E2=88=921omegaCX_C =3D -\dfrac{1}{\omega C}

Magnitude and phase:

=E2=88=A3Z=E2=88=A3=3DR2+X2,=CE=B8Z=3Dtan=E2=81=A1=E2=88=921=E2=80=89=E2=
=81=A3(XR)|Z| =3D \sqrt{R^2 + X^2}, \qquad \theta_Z =3D \tan^{-1}\!\left(\f=
rac{X}{R}\right)

Voltage-current relationship (phasor form):

V=E2=80=BE=3DI=E2=80=BE=E2=80=89Z\underline{V} =3D \underline{I} \, Z

---

## 2=
 Phasor Diagram

A **phasor** is a rotating vector representing a sinusoid=
's magnitude and phase.

- 
Draw current II as reference (0=C2=B0) or voltage depending on preferenc=
e.

- 
For a series **R-L** circuit:

Voltage across R is in phase with I.

- 
Voltage across L leads I by +90=C2=B0.

- 
Total voltage =3D vector sum of the two.

- 
For a series **R-C** circuit:

Capacitor voltage lags I by -90=C2=B0.

This vector addition gives the total phase angle of the circuit.

---

## =
3 Series and Parallel Networks

### Series

- 
Same **current** through all components.

- 
Total impedance:

Zeq=3DZ1+Z2+...Z_{eq} =3D Z_1 + Z_2 + \dots

### Parallel

- 
Same **voltage** across each branch.

- 
Total impedance:

1Zeq=3D1Z1+1Z2+...\frac{1}{Z_{eq}} =3D \frac{1}{Z_1} + \frac{1}{Z_=
2} + \dots

- 
Often easier to work with **admittance** (see below).

---

## 4 Voltage Divider Rule (AC Version)

For two or more impedances in **series**:

Vk=3DVtotal=C3=97ZkZ1+Z2+...V_k =3D V_{total} \times \frac{Z_k}{Z_=
1 + Z_2 + \dots}

Because impedances are complex, this gives both magnitude and phase of e=
ach branch voltage.

---

## 5=
 Admittance and Susceptance

**Admittance YY** is the reciprocal of impedance:

Y=3D1Z=3DG+jB\boxed{Y =3D \frac{1}{Z}} =3D G + jB

**G** =3D Conductance (real part, in siemens, S)

- 
**B** =3D Susceptance (imaginary part, in siemens, S)

Where

Inductor susceptance BL=3D=E2=88=921omegaLB_L =3D -\dfrac{1}{\omega L}

- 
Capacitor susceptance BC=3D+omegaCB_C =3D +\omega C

Parallel circuits add **admittances directly**:

Yeq=3DY1+Y2+...Y_{eq} =3D Y_1 + Y_2 + \dots

then Zeq=3D1/YeqZ_{eq} =3D 1 / Y_{eq}.

---

### Quick Example

Parallel R-C branch:

- 
R =3D 100 =CE=A9, C =3D 50 =C2=B5F, f =3D 60 Hz

- 
YR=3D1/100=3D0.01 SY_R =3D 1/100 =3D 0.01\ S

- 
BC=3DomegaC=3D2=CF=8060=C3=9750=C3=9710=E2=88=926=E2=89=880.0189 S=
B_C =3D \omega C =3D 2\pi 60 =C3=97 50=C3=9710^{-6} =E2=89=88 0.0189\ S

=

- 
Total admittance: Y=3D0.01+j0.0189 SY =3D 0.01 + j0.0189\ S

Magnitude |Y| =E2=89=88 0.0215 S -> Z_eq =E2=89=88 46.5 =CE=A9 at=
 angle -62=C2=B0.

---

### Key Takeaways

- 
**Impedance (Z)** combines resistance and reactance.

**Phasor diagrams** visualize magnitude and phase relations=
hips.

- 
**Voltage divider** works with complex impedances for AC.

- 
**Admittance (Y)** is convenient for **parallel networks; its imaginary part is susceptance (B)**.

Mastering these concepts lets you analyze any AC network quickly and acc=
urately.

mesh and nodal analysis, wye-delta and delta-wye conversions

Here's a **concise, step-by-step guide** to the top=
ics you asked for:

---

## 1 Mesh (Loop-Current) Analysis

**Purpose:** Find unknown **currents** in plan=
ar circuits using **Kirchhoff's Voltage Law (KVL).**
### Steps

- 
**Identify meshes** (independent loops with no interior bra=
nches).

- 
**Assign a mesh current** I1,I2,...I_1, I_2, =E2=80=
=A6 (choose clockwise or counter-clockwise).

- 
**Write KVL** for each mesh:

=E2=88=91(voltage drops and rises)=3D0\sum (\text{voltage=
 drops and rises}) =3D 0

- 
Shared elements have voltage drop proportional to the **difference=
** of mesh currents.

- 
Solve the simultaneous equations for all IkI_k.

**Tip:** Best when the circuit has **fewer meshes tha=
n nodes**.

---

## 2 Nodal (Node-Voltage) Analysis

**Purpose:** Find unknown **node voltages** us=
ing **Kirchhoff's Current Law (KCL).**

### Steps

- 
Choose a **reference (ground) node**.

- 
Label unknown node voltages V1,V2,...V_1, V_2, ....

- 
For each node, write KCL:

=E2=88=91Vnode=E2=88=92VneighborR=3D0\sum \frac{V_\text{node} - V_\text{=
neighbor}}{R} =3D 0

- 
Include current-source contributions as needed.

- 
Solve the simultaneous equations for all VkV_k.

**Tip:** Best when the circuit has **fewer nodes than=
 meshes** or many current sources.

---

## 3 Wye-Delta (Y-=CE=
=94) Conversions

When three resistors (or impedances) form a **three-terminal netwo=
rk**, you can convert between **star (Y or Wye)** and triangle (=CE=94 or Delta) to simplify series/parallel redu=
ction.

### a) Delta -> Wye
Given =CE=94 resistors Rab,Rbc,RcaR_{ab}, R_{bc}, R_{ca}:

Ra=3DRabRcaRab+Rbc+Rca,Rb=3DRabRbcRab+Rbc+Rca,Rc=3DRbcRcaRab+Rbc+Rca.\be=
gin{aligned} R_a &=3D \frac{R_{ab} R_{ca}}{R_{ab} + R_{bc} + R_{ca}}, \=
\ R_b &=3D \frac{R_{ab} R_{bc}}{R_{ab} + R_{bc} + R_{ca}}, \\ R_c &=
=3D \frac{R_{bc} R_{ca}}{R_{ab} + R_{bc} + R_{ca}}. \end{aligned}

Where RaR_a is the Wye resistor connected to node a, etc.

---

b) Wye -> Delta
Given Y resistors Ra,Rb,RcR_a, R_b, R_c:

Rab=3DRaRb+RbRc+RcRaRc,Rbc=3DRaRb+RbRc+RcRaRa,Rca=3DRaRb+RbRc+RcRaRb.\be=
gin{aligned} R_{ab} &=3D \frac{R_a R_b + R_b R_c + R_c R_a}{R_c}, \\ R_=
{bc} &=3D \frac{R_a R_b + R_b R_c + R_c R_a}{R_a}, \\ R_{ca} &=3D \=
frac{R_a R_b + R_b R_c + R_c R_a}{R_b}. \end{aligned}

---

When to Use

- 
A 3-node network that can't be simplified by basic series/parall=
el rules.

- 
Common in bridge circuits or unbalanced three-phase loads.

---

Quick Workflow Example

- 
**Spot** a =CE=94 of three resistors blocking easy simplifi=
cation.

- 
**Convert** to Y using the first set of formulas.

- 
**Combine** the resulting series/parallel resistors.

Optionally **back-convert** if needed for final values.

=

---

**Summary Table**

| Technique | Find Unknowns | Governing Law | Best Use Case |
|---|---|---|---|
| **Mesh** | Loop currents | KVL | Fewer meshes, mostly voltage sources |
| **Nodal** | Node voltages | KCL | Fewer nodes, many current sources |
| **Wye-Delta** | -- | -- | Simplify 3-terminal resistor/impedance clusters |

These methods are fundamental for systematically solving both DC and AC =
circuits, including resistive and complex-impedance networks.

- 
superposition theorem, Thevenin's theorem, Norton's theo=
rem, maximum power transfer theorem.

Here's a **concise but detailed** guide to the four=
 major circuit theorems--each with definition, step-by-step method, =
and a quick example idea.

---

## 1=EF=
=B8=8F Superposition Theorem

**Principle:**

In a *linear* circuit with multiple independent sources, the total c=
urrent or voltage in any element is the **algebraic sum** of t=
he effects produced by each source acting **alone**.

**Steps**

- 
**Choose one independent source** to keep active.

Turn **off** all others:

Voltage source -> replace with a **short circuit**.

- 
Current source -> replace with an **open circuit**.

- 
Find the voltage or current contribution from that single source.

Repeat for every independent source.

- 
Add all contributions (consider sign/phase for AC).

**Use Case Example:**

Circuit with a 10 V voltage source and a 5 A current source--calcula=
te branch currents by activating each source separately and summing the res=
ults.

---

## =
2 Thevenin's Theorem

**Principle:**

Any linear two-terminal network of sources and resistors can be replaced by=
 a **single voltage source VthV_{th}** in series with a single resistor RthR_{th}.

**Steps**

- 
**Remove the load** across the two terminals of interest.

- 
**Find VthV_{th}:** the open-circuit voltage across those t=
erminals.

- 
**Find RthR_{th}:**

Deactivate all independent sources (short voltage sources, open current =
sources).

- 
Compute the equivalent resistance seen from the terminals.

- 
Re-attach the load as VthV_{th} in series with RthR_{th}.

**Example Idea:**

Simplify a bridge network feeding a single load resistor to an easy one-sou=
rce/one-resistor circuit.

---

## 3=
 Norton's Theorem

**Principle:**

Any linear two-terminal network can be replaced by a **single current=
 source INI_{N}** in parallel with a **single resistor RNR_{N}=
**.

- 
RN=3DRthR_{N} =3D R_{th}.

- 
INI_{N} =3D short-circuit current across the output terminals.

**Conversion:**

Vth=3DIN=C3=97RNV_{th} =3D I_{N} \times R_{N}

So you can swap between Thevenin and Norton forms as needed.

---

## 4 Maximum Power Transfer Theorem

**Principle:**

A load receives **maximum power** from a source when the load =
resistance equals the source's Thevenin resistance (for AC, complex=
 conjugate if reactive).

RL=3DRth\boxed{R_{L} =3D R_{th}}

- 
Maximum power:

Pmax=E2=81=A1=3DVth24RthP_{\max} =3D \frac{V_{th}^2}{4 R_{th}}

**Applications:**

Audio systems, communication links, and impedance matching.

---

Quick Comparison Table

| Theorem | Replaces Network With | Goal / Benefit |
|---|---|---|
| **Superposition** | -- (analysis method) | Handle multiple independent sources one at a time. |
| **Thevenin** | Single voltage source + series resistor | Simplify network for load analysis. |
| **Norton** | Single current source + parallel resistor | Same as Thevenin but convenient for parallel loads. |
| **Maximum Power Transfer** | -- | Find load resistance for highest power draw. |

These four theorems are core tools for circuit simplification and design=
, letting you analyze or match loads quickly without repeatedly solving the=
 full network.

    

------=_Part_6_1802889261.1760785814076--