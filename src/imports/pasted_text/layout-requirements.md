NEW LAYOUT BEHAVIOR REQUIREMENTS
--------------------------------------------------

The Driver Monitor camera section should support TWO MODES:

1. DEFAULT HOME LAYOUT
- Large centered driver monitor section
- Main focus area on homepage
- Driver health monitoring appears below camera section
- Vehicle metrics and controls below

2. COMPACT MONITOR MODE (IMPORTANT)
After driver detection:
- Driver monitor camera section should smoothly slide to left side
- Become smaller floating/pinned monitoring panel
- Driver Health Monitoring moves upward
- Vehicle Metrics move upward
- Homepage becomes more dashboard-focused

Purpose:
- keep camera feed available for real-time monitoring
- maximize dashboard usability
- improve test/demo experience

IMPORTANT:
Add:
- Pin/Unpin button on camera panel
- Minimize button
- Expand button
- Floating compact monitor mode

Behavior:
- If pinned → stays fixed
- If minimized → small floating icon/button
- If expanded → returns to original large layout

Use smooth Framer Motion transitions.

--------------------------------------------------
MOBILE VIEW BEHAVIOR (VERY IMPORTANT)
--------------------------------------------------

Mobile UI must be extremely optimized.

CURRENT ISSUE TO FIX:
Driver monitor and status cards occupy too much space.

NEW MOBILE BEHAVIOR:
- Camera monitor becomes compact floating popup widget
- Floating AI monitor button on left side
- Clicking expands camera panel
- Clicking minimize shrinks to compact icon

In compact mode:
- Driver Health Monitoring moves to top
- AI Alerts move upward
- Vehicle Metrics become priority
- Main homepage becomes clean and scrollable

When expanded:
- Original layout restores smoothly

Add:
- floating glassmorphism action button
- smooth slide animations
- bottom spacing for mobile navigation

--------------------------------------------------
DRIVER HEALTH MONITORING SECTION
--------------------------------------------------

Move Driver Health Monitoring directly BELOW Driver Monitor section.

Include:
- Eye Tracking Status
- Drowsiness Detection Card
- Attention Score
- Alert Status

UI Style:
- minimal cards
- soft glowing indicators
- live monitoring feel
- animated status updates

Status examples:
- Focused
- Fatigue Detected
- Eyes Closed
- Distracted
- Safe Driving

This section should look:
- futuristic
- health-monitoring focused
- AI-assisted

--------------------------------------------------
DRIVER PROFILE MANAGEMENT COMPONENT
--------------------------------------------------

Add a new dedicated Driver Profiles component.

Purpose:
- save driver profiles
- personalize vehicle settings
- switch between users

Features:
- Driver profile card
- Driver avatar/image
- Driver name
- Save profile button
- Active profile indicator

Settings configurable per user:
- AC temperature
- Ambient lighting
- Seat adjustment
- Music preference
- Drive mode

IMPORTANT:
Keep profile UI minimal and premium.

--------------------------------------------------
SEAT ADJUSTMENT CONTROLS UPDATE
--------------------------------------------------

Replace slider-based seat controls.

Use 4 directional buttons:
- Forward
- Backward
- Uplift
- Downlift

Design:
- modern automotive control buttons
- icon-based controls
- tactile UI feel
- glowing hover effect

IMPORTANT:
Remove:
- steering sensitivity controls

--------------------------------------------------
LEFT SIDEBAR NAVIGATION UPDATE
--------------------------------------------------

Add:
- Vehicle Metrics menu item

Final Sidebar Menu:
- Dashboard
- Driver Monitor
- Vehicle Controls
- Vehicle Metrics
- Alerts
- Settings

IMPORTANT:
Menu items must:
- smoothly scroll to sections
- highlight active section
- work correctly on mobile and desktop

--------------------------------------------------
ALERT SYSTEM REQUIREMENTS
--------------------------------------------------

Prepare UI for future AI alert integrations.

The system should support future real-time alerts like:
- Driver Drowsiness Detected
- Driver Distraction Detected
- Collision Warning
- Fatigue Alert
- Unsafe Driving Detected
- AI Safety Recommendations

IMPORTANT:
Design future-ready notification system.

Notification Behavior:
- Floating alerts
- Slide-in warning cards
- Top-right toast notifications
- Emergency red alert mode
- AI voice assistant popup

Alert Types:
- Warning
- Danger
- Safe
- Info

Colors:
- Danger → soft red
- Warning → amber
- Safe → green
- Info → blue

Alerts should:
- animate smoothly
- feel intelligent
- look production-ready

--------------------------------------------------
HOME DASHBOARD PRIORITY ORDER
--------------------------------------------------

Desktop Priority Layout:
1. Driver Monitor
2. Driver Health Monitoring
3. Vehicle Metrics
4. Vehicle Controls
5. AI Alert Panel

Compact Mode Priority:
1. Driver Health Monitoring
2. Vehicle Metrics
3. Vehicle Controls
4. AI Alerts
5. Compact Floating Camera Monitor

Mobile Priority:
1. Driver Health Monitoring
2. AI Alerts
3. Vehicle Metrics
4. Vehicle Controls
5. Floating Camera Widget

--------------------------------------------------
ANIMATION REQUIREMENTS
--------------------------------------------------

Use Framer Motion.

Animations:
- smooth transitions
- panel slide animations
- minimize/expand transitions
- floating popup effects
- glowing AI pulse
- futuristic scanner animation
- smooth mobile transitions

Animation style should feel:
- premium
- cinematic
- minimal
- responsive

--------------------------------------------------
FINAL UX GOAL
--------------------------------------------------

The application should feel like:
- next-generation smart vehicle software
- futuristic AI cockpit operating system
- premium automotive experience
- realistic production-ready UI

The focus should remain:
- minimal design
- modern responsiveness
- AI-assisted driving UX
- elegant interactions
- real-time monitoring experience