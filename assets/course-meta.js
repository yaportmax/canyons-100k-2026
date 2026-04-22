// Canyons 100k 2026 — shared course metadata
window.CANYONS = {
  meta: {
    name: "Canyons Endurance Runs by UTMB 100K",
    date: "April 25, 2026",
    start: "China Wall (Soda Springs)",
    finish: "Downtown Auburn",
    startTime: "05:00",
    targetHours: 17.5,
    cutoffHours: 20,
    basePlanHours: 17.5,
  },
  // crew: true = crew-accessible per the April 21, 2026 official aid chart
  aidMeta: {
    "Start: China Wall": {
      crew: false,
      start: true,
      parking: "Runner shuttle only. Crew should not drive to China Wall on race morning."
    },
    "Deadwood - 1": {
      crew: false,
      twice: true,
      note: "First visit to Deadwood. Quick self-service stop before dropping to Swinging Bridge."
    },
    "Swinging Bridge - Turnaround": {
      crew: false,
      turnaround: true,
      note: "Bib-check turnaround at the canyon bottom. No crew access."
    },
    "Deadwood - 2": {
      crew: false,
      twice: true,
      note: "Second visit to Deadwood after the Loop 6 climb back out of the canyon."
    },
    "Michigan Bluff: Aid Station # 3": {
      crew: true,
      note: "First crew-access stop and the first full personal reset with crew."
    },
    "Foresthill: Aid Station # 4": {
      crew: true,
      hq: true,
      note: "Primary crew hub and the main midday reset in the personal crew-only plan."
    },
    "Cal 2: Aid Station # 5": {
      crew: false,
      note: "On the Western States Trail. No crew access."
    },
    "Drivers Flat: Aid Station # 6": {
      crew: true,
      warning: "Access road is rough dirt — high-clearance recommended, drive slow.",
      note: "Remote crew stop. Crew access only in the personal plan."
    },
    "Mammoth Bar: Aid Station # 7": {
      crew: false,
      note: "No crew access on the official April 21 aid chart."
    },
    "Confluence: Aid Station # 8": {
      crew: false,
      note: "Bottom of the final canyon. No crew — last push is up Robie Point to Auburn."
    },
    "Finish: Downtown Auburn": {
      crew: true,
      finish: true
    }
  },
  short: {
    "Start: China Wall": "China Wall",
    "Deadwood - 1": "Deadwood 1",
    "Swinging Bridge - Turnaround": "Swinging Bridge",
    "Deadwood - 2": "Deadwood 2",
    "Michigan Bluff: Aid Station # 3": "Michigan Bluff",
    "Foresthill: Aid Station # 4": "Foresthill",
    "Cal 2: Aid Station # 5": "Cal 2",
    "Drivers Flat: Aid Station # 6": "Driver's Flat",
    "Mammoth Bar: Aid Station # 7": "Mammoth Bar",
    "Confluence: Aid Station # 8": "Confluence",
    "Finish: Downtown Auburn": "Auburn Finish"
  },
  // Segment notes and grade-adjusted base plan hours from the updated alternate GPX.
  segments: [
    {
      from: "China Wall",
      to: "Deadwood 1",
      terrain: "Long opening descent through Tahoe NF with enough rollers to punish an overeager start. Let the quads stay fresh.",
      hours: 3.05,
      exposure: 0.35
    },
    {
      from: "Deadwood 1",
      to: "Swinging Bridge",
      terrain: "Fast drop to the turnaround. Stay controlled on the steeper canyon sections and keep the stop short.",
      hours: 0.47,
      exposure: 0.45
    },
    {
      from: "Swinging Bridge",
      to: "Deadwood 2",
      terrain: "Sustained climb back out of the canyon on Loop 6. This is a power-hike segment even on a good day.",
      hours: 1.11,
      exposure: 0.55
    },
    {
      from: "Deadwood 2",
      to: "Michigan Bluff",
      terrain: "Rolling reverse-WST terrain: descent toward Eldorado, then the long climb into Michigan Bluff.",
      hours: 2.02,
      exposure: 0.78
    },
    {
      from: "Michigan Bluff",
      to: "Foresthill",
      terrain: "Volcano Canyon down-and-up with the exposed Bath Road grind late in the segment.",
      hours: 1.74,
      exposure: 1.05
    },
    {
      from: "Foresthill",
      to: "Cal 2",
      terrain: "Cal Street is runnable if the legs are there, but it still chews up tired quads.",
      hours: 2.03,
      exposure: 0.88
    },
    {
      from: "Cal 2",
      to: "Driver's Flat",
      terrain: "Long, exposed grind with nearly even up/down load. Patient climbing wins here.",
      hours: 2.69,
      exposure: 1.15
    },
    {
      from: "Driver's Flat",
      to: "Mammoth Bar",
      terrain: "Drop to the river, then rolling Middle Fork trail that runs slower than it looks on paper.",
      hours: 2.06,
      exposure: 0.82
    },
    {
      from: "Mammoth Bar",
      to: "Confluence",
      terrain: "Short but technical river singletrack. Stay upright, keep fueling, no hero moves.",
      hours: 1.04,
      exposure: 0.55
    },
    {
      from: "Confluence",
      to: "Auburn Finish",
      terrain: "Robie Point and the final climb into Auburn. It is only four miles, but it does not run like four easy miles.",
      hours: 1.29,
      exposure: 0.42
    }
  ],
  // Crew driving between the official crew-access stops.
  drives: [
    {
      from: "Auburn Staging",
      to: "Michigan Bluff",
      miles: 25,
      minutes: 55,
      route: "I-80 E → Foresthill Rd exit → Foresthill Rd → Michigan Bluff Rd into town.",
      notes: "Crew goes straight here from Auburn after runner shuttle. Arrive early for parking."
    },
    {
      from: "Michigan Bluff",
      to: "Foresthill",
      miles: 8,
      minutes: 25,
      route: "Michigan Bluff Rd → Foresthill Rd → Foresthill Elementary / downtown area.",
      notes: "Paved but narrow and winding."
    },
    {
      from: "Foresthill",
      to: "Driver's Flat",
      miles: 13,
      minutes: 45,
      route: "Foresthill Rd east → Mosquito Ridge Rd → Driver's Flat Rd (dirt).",
      notes: "Last miles are rough dirt. High clearance helps and dust can be heavy."
    },
    {
      from: "Driver's Flat",
      to: "Auburn Finish",
      miles: 34,
      minutes: 70,
      route: "Back out to Mosquito Ridge Rd → Foresthill Rd west → I-80 / Hwy 49 into downtown Auburn.",
      notes: "No more crew stops after Driver's Flat on the official chart. Leave as soon as the runner departs."
    }
  ]
};

(function attachDayProfileHelpers(CM) {
  const DAY_HEAT_CURVES = {
    cool: [
      [0, 0.00], [4, 0.00], [5, 0.00], [6.5, 0.05], [8, 0.12], [10, 0.28],
      [12, 0.60], [14, 0.90], [16, 0.72], [18, 0.35], [20, 0.12], [22, 0.03], [24, 0.00]
    ],
    moderate: [
      [0, 0.10], [4, 0.08], [5, 0.12], [6.5, 0.18], [8, 0.30], [10, 0.55],
      [12, 0.95], [14, 1.32], [16, 1.08], [18, 0.62], [20, 0.28], [22, 0.14], [24, 0.10]
    ],
    hot: [
      [0, 0.42], [4, 0.40], [5, 0.48], [6.5, 0.62], [8, 0.85], [10, 1.10],
      [12, 1.55], [14, 1.95], [16, 1.65], [18, 1.08], [20, 0.62], [22, 0.48], [24, 0.42]
    ]
  };
  const PACE_SENSITIVITY = { cool: 0.05, moderate: 0.06, hot: 0.07 };
  const DEFAULT_HEAT = "moderate";
  const STORAGE_KEY = "canyons_nut_heat_v2";
  const ITERATIONS = 4;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function normalizeCourseName(name) {
    return String(name || "")
      .replace(/^Start:\s*/, "")
      .replace(/^Finish:\s*/, "")
      .replace(/: Aid Station.*$/, "")
      .replace(/ - Turnaround$/, "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^Finish$/, "Auburn Finish");
  }

  function keyForSegmentPoint(name) {
    return normalizeCourseName(name)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function segmentKey(from, to) {
    return `${keyForSegmentPoint(from)}→${keyForSegmentPoint(to)}`;
  }

  const segmentIndex = new Map(
    (CM.segments || []).map((segment) => [segmentKey(segment.from, segment.to), segment])
  );

  function findSegment(from, to) {
    return segmentIndex.get(segmentKey(from, to)) || null;
  }

  function hourOfDayCurveValue(curve, absoluteHour) {
    const hour = ((absoluteHour % 24) + 24) % 24;
    if (hour <= curve[0][0]) return curve[0][1];
    for (let i = 1; i < curve.length; i += 1) {
      const [endHour, endValue] = curve[i];
      if (hour <= endHour) {
        const [startHour, startValue] = curve[i - 1];
        const span = endHour - startHour || 1;
        return lerp(startValue, endValue, (hour - startHour) / span);
      }
    }
    return curve[curve.length - 1][1];
  }

  function normalizeHeatMode(heatMode) {
    return DAY_HEAT_CURVES[heatMode] ? heatMode : DEFAULT_HEAT;
  }

  function heatLevelAtHour(heatMode, absoluteHour) {
    return hourOfDayCurveValue(DAY_HEAT_CURVES[normalizeHeatMode(heatMode)], absoluteHour);
  }

  function interpolateByHeatLevel(valuesByHeat, heatLevel) {
    const level = clamp(heatLevel, 0, 2);
    if (level <= 1) return lerp(valuesByHeat.cool, valuesByHeat.moderate, level);
    return lerp(valuesByHeat.moderate, valuesByHeat.hot, level - 1);
  }

  function buildDayProfilePlan(segments, targetHours, heatMode, options = {}) {
    const safeHeatMode = normalizeHeatMode(heatMode);
    const startHour = options.startHour ?? 5;
    const baseSegments = (segments || []).map((segment) => {
      const baseHours = Number(segment.baseHr ?? segment.hr ?? segment.hours ?? 0);
      return {
        ...segment,
        baseHr: baseHours,
        exposure: Number.isFinite(segment.exposure) ? segment.exposure : 0.6
      };
    });
    const baseTotal = baseSegments.reduce((sum, segment) => sum + segment.baseHr, 0);
    const safeTarget = Number.isFinite(targetHours) && targetHours > 0 ? targetHours : baseTotal;
    const scaledBase = baseSegments.map((segment) => segment.baseHr * (safeTarget / (baseTotal || 1)));
    let working = scaledBase.slice();

    for (let iteration = 0; iteration < ITERATIONS; iteration += 1) {
      const midpointHours = [];
      let elapsed = 0;
      working.forEach((duration) => {
        midpointHours.push(startHour + elapsed + duration / 2);
        elapsed += duration;
      });

      const heatLevels = midpointHours.map((hour) => heatLevelAtHour(safeHeatMode, hour));
      let weightedHeat = 0;
      let weightTotal = 0;
      heatLevels.forEach((heatLevel, idx) => {
        const paceWeight = 0.45 + (baseSegments[idx].exposure * 0.55);
        const weight = working[idx] * paceWeight;
        weightedHeat += heatLevel * weight;
        weightTotal += weight;
      });
      const averageHeat = weightTotal > 0 ? weightedHeat / weightTotal : 0;

      const remapped = baseSegments.map((segment, idx) => {
        const paceWeight = 0.45 + (segment.exposure * 0.55);
        const heatDelta = heatLevels[idx] - averageHeat;
        const modifier = clamp(
          1 + (heatDelta * paceWeight * PACE_SENSITIVITY[safeHeatMode]),
          0.94,
          1.12
        );
        return scaledBase[idx] * modifier;
      });
      const remappedTotal = remapped.reduce((sum, duration) => sum + duration, 0) || 1;
      const renorm = safeTarget / remappedTotal;
      working = remapped.map((duration) => duration * renorm);
    }

    let elapsed = 0;
    return baseSegments.map((segment, idx) => {
      const hr = working[idx];
      const startElapsed = elapsed;
      const endElapsed = startElapsed + hr;
      const midpointElapsed = startElapsed + hr / 2;
      const midpointClock = startHour + midpointElapsed;
      const heatLevel = heatLevelAtHour(safeHeatMode, midpointClock);
      elapsed = endElapsed;
      return {
        ...segment,
        hr,
        startH: startElapsed,
        endH: endElapsed,
        midpointH: midpointElapsed,
        midpointClockH: midpointClock,
        dayHeatLevel: heatLevel,
        heatMode: safeHeatMode
      };
    });
  }

  CM.dayProfile = {
    curves: DAY_HEAT_CURVES,
    defaultHeat: DEFAULT_HEAT,
    storageKey: STORAGE_KEY,
    normalizeCourseName,
    findSegment,
    heatLevelAtHour,
    interpolateByHeatLevel,
    buildPlan: buildDayProfilePlan
  };
})(window.CANYONS);
