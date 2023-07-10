#!/usr/bin/python3

import numpy as np
import matplotlib.pyplot as plt

# Define the simulation parameters
nx, ny = 101, 101  # Grid size
nt = 100           # Number of time steps
dx = 1             # Grid spacing
dt = 1             # Time step
viscosity = 0.1    # Fluid viscosity

# Initialize the fluid velocity and density
u = np.zeros((ny, nx))
v = np.zeros((ny, nx))
rho = np.ones((ny, nx))

# Define the LBM constants
omega = 1.9
tau = viscosity * (3 * omega - 0.5) / (dx ** 2)

# Define the LBM weights and direction vectors
w = np.array([4/9, 1/9, 1/9, 1/9, 1/9, 1/36, 1/36, 1/36, 1/36])
cx = np.array([0, 1, 0, -1, 0, 1, -1, -1, 1])
cy = np.array([0, 0, 1, 0, -1, 1, 1, -1, -1])

# Define a function to calculate the equilibrium distribution
def equilibrium(rho, u, v):
    cu = 3 * (cx * u + cy * v)
    uu = 3/2 * (u ** 2 + v ** 2)
    feq = np.zeros((9, ny, nx))
    for i in range(9):
        feq[i] = rho * w[i] * (1 + cu[i] + 0.5 * cu[i] ** 2 - uu)
    return feq

# Define a function to calculate the macroscopic variables
def macroscopic(f):
    rho = np.sum(f, axis=0)
    u = np.sum(f * cx, axis=0) / rho
    v = np.sum(f * cy, axis=0) / rho
    return rho, u, v

# Main loop
for n in range(nt):
    # Calculate the equilibrium distribution
    feq = equilibrium(rho, u, v)
    # Calculate the non-equilibrium distribution
    fneq = np.zeros((9, ny, nx))
    for i in range(9):
        cu = 3 * (cx[i] * u + cy[i] * v)
        fneq[i] = w[i] * rho * cu / (3 * (tau + 0.5))
    # Update the distribution function
    f = feq + fneq - (feq - equilibrium(rho, u, v)) / tau
    # Calculate the macroscopic variables
    rho, u, v = macroscopic(f)
    # Apply boundary conditions (bounce-back)
    u[0, :] = 0
    v[0, :] = 0
    u[-1, :] = 0
    v[-1, :] = 0
    u[:, 0] = 0
    v[:, 0] = 0
    u[:, -1] = 0
    v[:, -1] = 0
    # Plot the results
    if n % 10 == 0:
        plt.clf()
        plt.quiver(u, v)
        plt.pause(0.001)

plt.show()
