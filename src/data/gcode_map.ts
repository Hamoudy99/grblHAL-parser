// G5 G7 G8 G43 G49 G50 G51 G73 G81 G82 G83 G85 G86 G89 G96 G97 G98 G99 M1 M50 M51 M53 M56 M60

export const gcodeMap = {
  "gcode": {
    "G0": {
      "code": "G0",
      "name": "Movement",
      "description": "The last movement command"
    },
    "G54": {
      "code": "G54",
      "name": "WCS",
      "description": "Default Work Coordinate System"
    },
    "G17": {
      "code": "G17",
      "name": "Plane",
      "description": "X Y (default)"
    },
    "G21": {
      "code": "G21",
      "name": "Units",
      "description": "Current units"
    },
    "G28": {
      "code": "G28",
      "name": "Predefined Position",
      "description": "Go to Predefined Position"
    },
    "G90": {
      "code": "G90",
      "name": "Distance Mode",
      "description": "Absolute distance mode"
    },
    "G94": {
      "code": "G94",
      "name": "Feed Rate Mode",
      "description": "Units per minute mode"
    }
  },
  "mcode": {
    "M0": {
      "code": "M0",
      "name": "Suspended",
      "description": "Machine is currently suspended"
    },
    "M5": {
      "code": "M5",
      "name": "Spindle",
      "description": "Spindle stopped"
    },
    "M9": {
      "code": "M9",
      "name": "Coolant",
      "description": "Coolant stopped"
    }
  },
  "tool": {
    "TLO": {
      "code": "TLO",
      "name": "Tool length offset",
      "description": "The distance the tool is offset from the current WCS"
    }
  }
} as const;
