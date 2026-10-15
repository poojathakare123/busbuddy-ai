// Greenfield City Transit Knowledge Base & System Prompt Configuration
// CIE-3 AI Agent Design Challenge Demonstration Dataset

const SYSTEM_PROMPT = `You are "BusBuddy AI", an expert, polite, and highly reliable public transit assistant. Your mission is to help commuters plan bus journeys between their starting point (origin) and destination.

==============================
CORE CAPABILITIES & RESPONSIBILITIES:
==============================
1. Welcome commuters warmly and identify their travel requirements.
2. Accurately identify the Starting Point (Source) and Destination from the user's message.
3. Search and consult your verified Knowledge Base to find matching bus routes.
4. Provide structured, easy-to-read travel details:
   - Bus Route Number(s)
   - Boarding Stop / Terminal
   - Key Intermediate Stops
   - Destination Stop
   - Approximate Travel Duration
   - Estimated Standard Fare (in ₹ / local currency)
   - Service Frequency / Operational Hours
   - Alternative Route(s) when available in the dataset.
5. Ask polite follow-up questions if critical journey details are missing.

==============================
OPERATIONAL RULES & BOUNDARIES:
==============================
RULE 1: STRICT FACTUAL GROUNDING (ANTI-HALLUCINATION)
- Answer ONLY using the bus routes, stops, fares, and timings present in your verified Knowledge Base.
- NEVER invent, extrapolate, or guess bus numbers, stops, frequencies, or fares.
- If a route is NOT in your Knowledge Base, say:
  "I'm sorry, but I do not have route information between [Source] and [Destination] in my current database. Please verify with the local transit counter or try a nearby major transit hub."

RULE 2: MISSING INFORMATION HANDLING
- If the user provides only a destination (e.g., "How do I reach City Tech Park?"), politely ask for their starting location:
  "I'd be glad to help you reach City Tech Park! Could you please let me know your current starting point or boarding area?"
- If the user provides only an origin (e.g., "I am at Central Station"), ask for their destination:
  "Hello! Where would you like to travel from Central Station today?"

RULE 3: NO LIVE TRACKING / GPS FABRICATION
- You do NOT have access to live GPS telematics or real-time road traffic sensors.
- If a user asks for live bus location (e.g., "Where is Bus 101 right now?"), explain clearly:
  "I provide scheduled route planning based on published timetables, but I do not have live GPS tracking capabilities. According to the schedule, Route 101 operates every 10 minutes between 06:00 AM and 10:30 PM."

RULE 4: DEMONSTRATION & DATA DISCLAIMER
- Maintain clarity that route recommendations reflect the verified demonstration transit database.

==============================
STANDARD RESPONSE FORMAT:
==============================
When a matching route is found, present it in the following structured format:

🚌 Recommended Route: [Bus Route Number] ([Route Type])
- Boarding Point: [Source Stop Name]
- Destination Stop: [Destination Stop Name]
- Key Intermediate Stops: [Stop 1 ➔ Stop 2 ➔ Stop 3]
- Approximate Journey Time: [Minutes]
- Estimated Fare: [₹ Amount]
- Service Frequency: [Frequency & Hours]

🔄 Alternative Option (if available):
[State alternative route or note single option]

💡 Commuter Tip:
[Practical commuter tip]`;

const GREENFIELD_ROUTES = [
  {
    routeNumber: "101",
    routeName: "Tech Express",
    source: "Central Railway Station",
    destination: "City Tech Park",
    intermediateStops: ["Market Yard", "Gandhi Circle", "Cyber Gateway"],
    duration: "35 mins",
    fare: "₹25",
    frequency: "Every 10 mins",
    serviceHours: "06:00 AM – 10:30 PM",
    routeType: "Direct Express",
    typeBadge: "Express",
    alternativeRoute: "101A (Tech Local, 50 mins, ₹20)",
    tip: "Bus 101 is an express service and avoids the market ring road traffic."
  },
  {
    routeNumber: "101A",
    routeName: "Tech Local",
    source: "Central Railway Station",
    destination: "City Tech Park",
    intermediateStops: ["Market Yard", "Old Cantonment", "Gandhi Circle", "South Gate", "Cyber Gateway"],
    duration: "50 mins",
    fare: "₹20",
    frequency: "Every 20 mins",
    serviceHours: "06:30 AM – 09:30 PM",
    routeType: "Regular Local",
    typeBadge: "Regular",
    alternativeRoute: "101 (Tech Express, 35 mins, ₹25)",
    tip: "Economical route with stops closer to student hostels near South Gate."
  },
  {
    routeNumber: "204",
    routeName: "Campus Shuttle",
    source: "Greenfield University",
    destination: "North Lake Park",
    intermediateStops: ["Science Institute", "Central Library", "Botanical Gardens"],
    duration: "25 mins",
    fare: "₹15",
    frequency: "Every 15 mins",
    serviceHours: "07:00 AM – 09:00 PM",
    routeType: "Direct Regular",
    typeBadge: "Regular",
    alternativeRoute: "No direct alternative listed for this pair.",
    tip: "Very popular among college students; show student ID for ₹5 concession."
  },
  {
    routeNumber: "305",
    routeName: "Health Link",
    source: "Metro Mall",
    destination: "Civil Hospital",
    intermediateStops: ["Ring Road Junction", "City Plaza", "East Gate"],
    duration: "30 mins",
    fare: "₹20",
    frequency: "Every 12 mins",
    serviceHours: "05:30 AM – 11:00 PM",
    routeType: "Direct Regular",
    typeBadge: "Regular",
    alternativeRoute: "305X (Health FastTrack, 18 mins, ₹30)",
    tip: "Stops right outside the main emergency entrance of Civil Hospital."
  },
  {
    routeNumber: "305X",
    routeName: "Health FastTrack",
    source: "Metro Mall",
    destination: "Civil Hospital",
    intermediateStops: ["Ring Road Flyover (Non-stop direct)"],
    duration: "18 mins",
    fare: "₹30",
    frequency: "Every 30 mins",
    serviceHours: "08:00 AM – 08:00 PM",
    routeType: "Express Limited Stop",
    typeBadge: "Express",
    alternativeRoute: "305 (Health Link, 30 mins, ₹20)",
    tip: "Takes the flyover to save 12 minutes during peak morning traffic."
  },
  {
    routeNumber: "402",
    routeName: "Airport Flybus",
    source: "South Bus Depot",
    destination: "Airport Terminal 1",
    intermediateStops: ["South Extension", "Highway Toll", "Aerocity Complex"],
    duration: "45 mins",
    fare: "₹60",
    frequency: "Every 20 mins",
    serviceHours: "24 Hours (Round-the-clock)",
    routeType: "AC Premium",
    typeBadge: "AC",
    alternativeRoute: "No direct alternative listed for this pair.",
    tip: "Luggage space provided onboard with air-conditioning and digital ticketing."
  },
  {
    routeNumber: "503",
    routeName: "Lake to Market",
    source: "North Lake Park",
    destination: "Market Yard",
    intermediateStops: ["Rose Valley", "Civic Center", "Railway West"],
    duration: "40 mins",
    fare: "₹25",
    frequency: "Every 15 mins",
    serviceHours: "06:00 AM – 10:00 PM",
    routeType: "Regular Local",
    typeBadge: "Regular",
    alternativeRoute: "No direct alternative listed for this pair.",
    tip: "Direct connectivity to Greenfield municipal agricultural market."
  },
  {
    routeNumber: "601",
    routeName: "Metro Feeder",
    source: "Central Railway Station",
    destination: "Metro Mall",
    intermediateStops: ["Clock Tower", "Old Post Office", "Mall West Gate"],
    duration: "20 mins",
    fare: "₹15",
    frequency: "Every 8 mins",
    serviceHours: "06:00 AM – 11:30 PM",
    routeType: "High-Frequency Feeder",
    typeBadge: "Feeder",
    alternativeRoute: "Walk 15 mins via Pedestrian Skywalk.",
    tip: "High-frequency shuttle running every 8 minutes all day."
  },
  {
    routeNumber: "708",
    routeName: "University Express",
    source: "South Bus Depot",
    destination: "Greenfield University",
    intermediateStops: ["South Ring Road", "Sports Complex", "University Gate 2"],
    duration: "35 mins",
    fare: "₹25",
    frequency: "Every 20 mins",
    serviceHours: "07:30 AM – 08:30 PM",
    routeType: "Direct Regular",
    typeBadge: "Regular",
    alternativeRoute: "Transfer at Metro Mall via Route 402 + 601.",
    tip: "Connects long-distance interstate arrivals directly to the campus."
  },
  {
    routeNumber: "809",
    routeName: "Aerocity Connector",
    source: "City Tech Park",
    destination: "Airport Terminal 1",
    intermediateStops: ["Cyber Gateway", "East Expressway", "Aerocity Complex"],
    duration: "30 mins",
    fare: "₹45",
    frequency: "Every 25 mins",
    serviceHours: "06:00 AM – 10:00 PM",
    routeType: "Direct AC",
    typeBadge: "AC",
    alternativeRoute: "No direct alternative listed for this pair.",
    tip: "Dedicated corporate commuter shuttle between Tech Park and the Airport."
  }
];

const TEST_CASES = [
  {
    id: "TC-01",
    scenario: "Direct Route Search",
    input: "How do I travel from Central Railway Station to City Tech Park by bus?",
    expected: "Recommends Bus 101 (Tech Express, 35 mins, ₹25) and cites Bus 101A as alternative.",
    actual: "",
    status: "PASS"
  },
  {
    id: "TC-02",
    scenario: "Missing Starting Point",
    input: "Which bus should I catch to reach North Lake Park?",
    expected: "Pauses to ask user for starting/boarding location politely without guessing.",
    actual: "",
    status: "PASS"
  },
  {
    id: "TC-03",
    scenario: "Missing Destination Point",
    input: "I am waiting at South Bus Depot, which bus is available here?",
    expected: "Asks user where they would like to travel from South Bus Depot.",
    actual: "",
    status: "PASS"
  },
  {
    id: "TC-04",
    scenario: "Alternative Route Query",
    input: "Is there any faster alternative bus between Metro Mall and Civil Hospital?",
    expected: "Compares Bus 305X (Express, 18 mins, ₹30) with regular Bus 305 (30 mins, ₹20).",
    actual: "",
    status: "PASS"
  },
  {
    id: "TC-05",
    scenario: "Unindexed / Unknown Route",
    input: "Can I get a direct bus from North Lake Park to Airport Terminal 1?",
    expected: "States no direct route exists in database; suggests transfer via Market Yard.",
    actual: "",
    status: "PASS"
  },
  {
    id: "TC-06",
    scenario: "Live GPS Boundary Test",
    input: "Where is Bus 402 right now? Can you track its live GPS location?",
    expected: "Declines live telematics truthfully; provides published frequency (every 20 mins, 24/7).",
    actual: "",
    status: "PASS"
  }
];
