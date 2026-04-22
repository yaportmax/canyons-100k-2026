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
      hours: 3.05
    },
    {
      from: "Deadwood 1",
      to: "Swinging Bridge",
      terrain: "Fast drop to the turnaround. Stay controlled on the steeper canyon sections and keep the stop short.",
      hours: 0.47
    },
    {
      from: "Swinging Bridge",
      to: "Deadwood 2",
      terrain: "Sustained climb back out of the canyon on Loop 6. This is a power-hike segment even on a good day.",
      hours: 1.11
    },
    {
      from: "Deadwood 2",
      to: "Michigan Bluff",
      terrain: "Rolling reverse-WST terrain: descent toward Eldorado, then the long climb into Michigan Bluff.",
      hours: 2.02
    },
    {
      from: "Michigan Bluff",
      to: "Foresthill",
      terrain: "Volcano Canyon down-and-up with the exposed Bath Road grind late in the segment.",
      hours: 1.74
    },
    {
      from: "Foresthill",
      to: "Cal 2",
      terrain: "Cal Street is runnable if the legs are there, but it still chews up tired quads.",
      hours: 2.03
    },
    {
      from: "Cal 2",
      to: "Driver's Flat",
      terrain: "Long, exposed grind with nearly even up/down load. Patient climbing wins here.",
      hours: 2.69
    },
    {
      from: "Driver's Flat",
      to: "Mammoth Bar",
      terrain: "Drop to the river, then rolling Middle Fork trail that runs slower than it looks on paper.",
      hours: 2.06
    },
    {
      from: "Mammoth Bar",
      to: "Confluence",
      terrain: "Short but technical river singletrack. Stay upright, keep fueling, no hero moves.",
      hours: 1.04
    },
    {
      from: "Confluence",
      to: "Auburn Finish",
      terrain: "Robie Point and the final climb into Auburn. It is only four miles, but it does not run like four easy miles.",
      hours: 1.29
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
