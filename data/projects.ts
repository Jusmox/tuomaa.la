import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Bachelor Thesis',
    shortDescription: 'An intelligent aeroponic irrigation system integrated with IoT technologies, featuring automated control, real-time monitoring, and 3D-printed modular components.',
    longDescription: `This bachelor thesis focused on the development of an intelligent aeroponic irrigation system integrated with IoT technologies.

The main problem addressed was how to automate and optimize irrigation in an aeroponic growing environment using real-time sensor data.

Approach and methodology:
- Design of system architecture for aeroponic cultivation
- Selection and integration of sensors and actuators
- PCB and circuit design
- Firmware development for the control unit
- IoT integration for monitoring and control
- User interface implementation and comparison of UI solutions

Key features and functionality:
- Automated irrigation control based on sensor readings
- Real-time data transmission via IoT
- Remote monitoring through a user interface
- Modular hardware and 3D-printed mechanical components

Results and impact:
- Functional prototype demonstrating reliable automated irrigation
- Improved control and monitoring compared to manual systems
- Practical proof of concept suitable for further development and scaling.`,
    technologies: [
        'ESP32',
        'IoT',
        'Sensors',
        'Embedded Systems',
        'PCB Design',
        '3D Printing',
        'Node-RED',
        'Telegram Bot API',
      ],
    date: '2025-09',
    category: 'IoT & Embedded Systems',
    link: 'https://urn.fi/URN:NBN:fi:amk-2025103026769',
    thumbnail: 'thumbnail.png',
    images: ['Picture2.png', 'Picture3.png', 'Picture4.png', 'Picture5.png', 'Picture6.png', 'Picture7.png'],
  },
  {
    id: 'project-2',
    title: 'Mittabotti',
    shortDescription:
      'A playful Telegram bot running on a Raspberry Pi that tracks and ranks measurement images posted in a group chat as a joke project.',
    longDescription: `Mittabotti is a humorous pet project Telegram bot designed to run on a Raspberry Pi and built using Node-RED.

The "problem" it addresses is tracking how many measurement images group members post, purely for fun and friendly competition.

Approach and methodology:
- Telegram Bot API integration using Node-RED
- Message parsing to detect and count measurement images
- Persistent data storage using local JSON files
- Command-based interaction model for querying statistics
- Designed a physical fabric patch for the group in Adobe Illustrator, finalized and waiting to be ordered

Key features and functionality:
- Counts posted measurement images in group chats for fun
- Tracks individual user totals humorously
- Calculates total measurements for the entire group
- Ranks users in a playful competition
- Custom Telegram commands for statistics (e.g. top users, personal totals, group totals)
- Runs continuously on a Raspberry Pi
- Designed physical project patch for the group in Adobe Illustrator, ready for production

Results and impact:
- Fun and engaging way to track activity in the group
- Creates playful competition among members
- Tangible branding element as a fabric patch designed in Adobe Illustrator`,
    technologies: [
      'Node-RED',
      'Telegram Bot API',
      'Raspberry Pi',
      'JavaScript',
      'JSON',
      'Linux',
      'Adobe Illustrator',
    ],
    date: '2025-05',
    category: 'Automation & Bots, Graphical Design',
    thumbnail: 'thumbnail.jpg',
    images: ['1.png', 'Untitled-2-01.png'],
  },
  {
    id: 'project-3',
    title: 'Laser Engraved Map Gift',
    shortDescription:
      'Custom laser-cut and engraved map of a Finnish village made from birch and basswood, framed with burl birch, created as a personalized gift.',
    longDescription: `This project involved creating a laser-engraved and cut map of a Finnish village as a unique gift.

Materials and process:
- Base materials: birch and basswood
- Frame: burl birch
- Data sourced from Maanmittauslaitos
- Finished with clear stain varnish for protection and aesthetic appeal

Key features:
- Detailed topographic engraving of a Finnish village
- Combination of materials for visual depth and contrast
- Finished and ready-to-gift presentation

Results and impact:
- Custom, high-quality map suitable as a memorable gift
- Demonstrates skill in both woodworking and digital design integration

Note: Images provided are limited and censored due to privacy reasons.`,
    technologies: [
      'Laser Marking & Cutting',
      'QGIS',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Falcon Design Space',
      'Woodworking',
    ],
    date: '2025-12',
    category: 'Woodworking, Graphical Design, Laser Marking & Cutting',
    thumbnail: 'thumbnail.png',
    images: ['Untitled-1.png'],
  },
  {
    id: 'project-4',
    title: 'School Menu Telegram Bot',
    shortDescription:
      'Telegram bot that fetches the weekly menu from the school restaurant and posts it every Monday at 9 AM to three HAMK campus channels.',
    longDescription: `This project is a Telegram bot designed to automatically fetch the weekly menu from the school restaurant's website and post it to the Telegram channels of three different HAMK campuses every Monday at 9 AM.

Approach and methodology:
- Fetches JSON data from the school restaurant website
- Parses and formats the menu for Telegram
- Posts the weekly menu automatically to three HAMK campus channels every Monday at 9 AM
- Built using Node-RED for low-code development

Key features and functionality:
- Fully automated weekly menu updates
- Scheduled posting every Monday at 9 AM
- Supports multiple HAMK campus channels
- Easily maintainable and scalable
- Minimal manual intervention required

Results and impact:
- Ensures students and staff have timely access to the weekly menu
- Saves manual posting time
- Demonstrates integration of web data with messaging platforms using Node-RED

Links to campus channels:
- Riihimäki campus: https://t.me/mossukka
- Hämeenlinna campus: https://t.me/visamaki
- Valkeakoski campus: https://t.me/osameista`,
    technologies: [
      'Node-RED',
      'Telegram Bot API',
      'JavaScript',
      'JSON',
      'Automation',
    ],
    date: '2024-04',
    category: 'Automation & Bots',
    thumbnail: 'thumbnail.jpg',
    images: ['Screenshot 2025-12-19 214145.png', 'Screenshot 2025-12-19 214252.png'],
  },
  {
    id: 'project-5',
    title: 'Printed Magazine Compatible for Glock 45',
    shortDescription:
      '3D-printed magazine compatible with Glock 45, with minor design modifications and material testing.',
    longDescription: `This project involved 3D printing a magazine compatible with the Glock 45 based on an existing open-source model.

The original model was created by Ivanthetroll and FreeMenDontAsk. Minor modifications were made using Blender to improve fit and function.

Materials and process:
- Original model adapted and modified in Blender
- Printed using PLA, PETG, and polycarbonate (PC)
- Magazine capacity intentionally reduced to ensure it does not exceed limits defined by Finnish firearms legislation

Key features and findings:
- Magazines functioned reliably and fed well after several design iterations
- Material flexibility caused the fully loaded magazine to swell
- Swelling made insertion into an empty firearm difficult, especially with more flexible materials

Results and lessons learned:
- Demonstrated the impact of material properties on functional firearm accessories
- Highlighted limitations of common 3D printing materials for load-bearing spring-loaded components
- Provided practical experience in iterative 3D design and testing`,
    technologies: [
      '3D Printing',
      '3D Design',
      'Blender',
      'PLA',
      'PETG',
      'Polycarbonate',
    ],
    date: '2023-05',
    category: '3D Printing, 3D Design',
    thumbnail: 'thumbnail.jpg',
    images: ['PXL_20230606_182044780.jpg', 'PXL_20230606_182050661.jpg', 'PXL_20230606_182109102.jpg', 'PXL_20230622_100208096.jpg', 'PXL_20230622_100312617.jpg', 'PXL_20230622_101525122~3.mp4'],
  },
  {
    id: 'project-6',
    title: 'Private Wireless Access Control System',
    shortDescription:
      'Experimental wireless access control system using RFID and ESP32, designed as a workaround for limited student union keys.',
    longDescription: `This project explored building a private, wireless access control system to address limitations in the number of keys provided by the student union.

Approach and implementation:
- ESP32-based controller
- RFID cards and reader for authentication
- Stepper motor for mechanical actuation
- Battery-powered operation using a power bank
- Custom 3D-printed enclosure for the electronics

Performance and limitations:
- Stepper motor was not strong enough to reliably open a modern apartment door
- Worked well on an older door in school premises

Outcome:
- Functional prototype demonstrating wireless, portable access control
- Project was discontinued after complaints were received

Notes:
- Built as an experimental and educational project to explore embedded systems, power management, and mechanical actuation.`,
    technologies: [
      'ESP32',
      'RFID',
      'Stepper Motor',
      '3D Printing',
      'Embedded Systems',
      'IoT',
    ],
    date: '2024-11',
    category: 'IoT, Embedded Systems, Automation',
    thumbnail: 'thumbnail.jpg',
    images: ['PXL_20241108_214823380.MP.jpg', 'Snapchat-1444146788~2.jpg', 'Snapchat-700415472.mp4', 'Snapchat-894461259.mp4'],
  },
  {
    id: 'project-7',
    title: '3D-Printed Moon Lithophane Lamp',
    shortDescription: 'A remixed 3D-printed moon lamp fitted with a Philips Hue smart bulb.',
    longDescription: `This project involved 3D printing a detailed moon lithophane. I found the base model online and remixed the design to ensure it would fit a standard lamp socket. To add modern functionality and versatility, I integrated a Philips Hue bulb, allowing for adjustable brightness and a full spectrum of colors.`,
    technologies: [
      '3D Printing',
      '3D Design',
      'Philips Hue',
    ],
    date: '2023-11',
    category: '3D Printing, Smart Home',
    thumbnail: 'thumbnail.jpg',
    images: ['PXL_20230618_124022685.jpg', 'PXL_20230618_124125719.jpg', 'PXL_20230618_124143803.jpg', 'PXL_20240105_133325844.jpg', 'PXL_20240105_133346893.jpg'],
  },
  {
    id: 'project-8',
    title: 'Custom Oak Magic Mirror',
    shortDescription: 'A Raspberry Pi-powered smart mirror featuring a handcrafted oak frame and custom data modules.',
    longDescription: `Based on the MagicMirror² open-source platform, this project involved repurposing an old monitor into a functional smart mirror. The display consists of a plexiglass screen coated with one-way mirror film. The frame was hand-crafted from oak and finished using a vinegar and steel wool stain for a unique, aged aesthetic. To improve energy efficiency, I integrated a PIR motion sensor to toggle the display. The interface is customized to show a shared Google Calendar, real-time electricity prices, weather, news, and a rotating list of messages.`,
    technologies: [
      'Raspberry Pi',
      'MagicMirror²',
      'JavaScript',
      'Sensors',
      'Woodworking',
      'API Integration'
    ],
    date: '2025-07',
    category: 'IoT, Smart Home, Woodworking',
    thumbnail: 'thumbnail.jpg',
    images: ['photo_2025-09-23_22-55-05.jpg', 'PXL_20250720_205949053.jpg', 'PXL_20250720_205957626.jpg', 'Snapchat-989516060.jpg'],
  },
  {
    id: 'project-9',
    title: 'Custom Branded Raspberry Pi 4 Case',
    shortDescription: 'A heavily remixed snap-fit Raspberry Pi 4 case featuring a school logo and optimized tolerances.',
    longDescription: `Based on the "Malolo's Screw-less Snap-fit" design, this project served as an intensive exercise in 3D modeling and mechanical tolerances. While maintaining the original snap-fit mechanism, I redesigned the rest of the chassis to incorporate a custom school logo and improve the overall fit. The project focused on mastering real-world 3D printing constraints to ensure a secure, "click-in" assembly without the need for hardware.`,
    technologies: [
      '3D Printing',
      '3D Design',
      'Rapid Prototyping',
      'Raspberry Pi'
    ],
    date: '2024-09',
    category: '3D Printing, Enclosures',
    thumbnail: 'thumbnail.jpg',
    images: ['PXL_20240929_174059561.RAW-01.COVER.jpg', 'PXL_20240929_174104398.RAW-01.COVER.jpg'],
  },
  {
    id: 'project-10',
    title: 'Custom LED Patch Display Briefcase',
    shortDescription: 'A modified briefcase for Kuisti ry featuring an illuminated logo, internal lighting, and custom 3D-printed organizers.',
    longDescription: `Designed for the student community club Kuisti ry, this project transformed a standard briefcase into a mobile display and point-of-sale unit for student overall patches. Key features include a powerbank-driven LED system with a custom-lit shining logo and an automated lid switch that toggles the lights. I also designed and 3D-printed internal storage trays specifically sized to organize patches and securely hold an iZettle payment terminal.`,
    technologies: [
      '3D Printing',
      'LED Circuitry',
      'Power Management',
      'Sensors',
      'Product Design'
    ],
    date: '2025-02',
    category: 'Electronics, 3D Design, 3D Printing',
    thumbnail: 'Thumbnail.png',
    images: ['PXL_20250204_052113512.MP.jpg', 'Snapchat-1502489.mp4', 'Snapchat-840272148.jpg'],
  },
  {
    id: 'project-11',
    title: 'Guerilla Absurdist Trail Signage',
    shortDescription: 'A series of miniature, 3D-printed signs with humorous and absurd messages placed along local hiking trails.',
    longDescription: `An experimental project in public art and 3D design where I created miniature signage to add humor to local hiking trails. Each sign featured a different absurd or funny message, designed and printed to withstand outdoor conditions. While I meticulously tagged the location of every sign on a personal map with the intent to remove them eventually, the project reached an unexpected conclusion when every single sign was "stolen" by passersby within a week.`,
    technologies: [
      '3D Design',
      '3D Printing',
      'Rapid Prototyping',
    ],
    date: '2025-04',
    category: '3D Design, 3D Printing, Art',
    thumbnail: 'thumbnail.png',
    images: ['PXL_20250408_002703697.jpg', 'PXL_20250408_030955110.MP.jpg', 'Snapchat-1730332371.mp4', 'Snapchat-205910642.jpg', 'Snapchat-22073839.jpg'],
  },
  {
    id: 'project-12',
    title: 'Custom Vent Gauge Pod Design (Volvo)',
    shortDescription: '3D-designed and printed gauge pod integrated into an old Volvo factory dashboard vent.',
    longDescription: `This project was a custom commission for a friend to update the interior of an old Volvo. I was provided with the original factory vent module, from which I took precise physical measurements to ensure a perfect fit. I then designed a custom dual-gauge housing to replace the vent slats while maintaining the original mounting points.`,
    technologies: [
      '3D Design',
      '3D Printing',
      'Automotive Interior Design',
      'Measurement & Calibration'
    ],
    date: '2022-10',
    category: '3D Design, 3D Printing, Automotive',
    thumbnail: 'thumbnail.jpeg',
    images: ['Snapchat-1577674184.mp4', 'WhatsApp Image 2022-10-10 at 17.32.40.jpeg'],
  },
  {
    id: 'project-13',
    title: 'Laser-Marked Smart Calling Cards',
    shortDescription: 'Hybrid business cards featuring laser-marked graphics, QR codes, and embedded RFID chips.',
    longDescription: `An experimental project focused on mastering laser marking techniques across different materials. These smart calling cards integrate physical and digital networking: each card features a laser-marked QR code and an internal RFID chip, both programmed to link directly to my online CV. The project evolved through two iterations: the first generation utilized white plastic RFID cards, while the second generation transitioned to a more tactile wooden RFID medium.`,
    technologies: [
      'Laser Marking & Cutting',
      'RFID',
      'NFC/QR Codes',
    ],
    date: '2025-12',
    category: 'Embedded Systems, IoT, Digital Fabrication',
    thumbnail: 'Thumbnail.jpg',
    images: [],
  },
  {
    id: 'project-14',
    title: 'BIM-to-Physical: Miniature Precast Wall',
    shortDescription: 'A detailed miniature of a precast concrete wall featuring balcony openings, assembled from material-specific 3D-printed parts.',
    longDescription: `This project bridged the gap between structural engineering software and physical miniatures. I exported a wall model from Tekla Structures, processed it through Unreal Engine (Datasmith) to Blender, and isolated individual components for separate printing. To achieve realism, I printed the parts individually using material-specific filaments: concrete-infused PLA for the panels, yellow PLA for insulation, steel-dust infused PLA for PVL connecting loops, and sawdust-infused PLA for the window and door frames. Structural details like rebars and lifting hooks were manually added using steel wire before final assembly.`,
    technologies: [
      'Tekla Structures',
      'Blender',
      'Unreal Engine (Datasmith)',
      '3D Printing',
      'Concrete/Steel/Wood Infused Filaments'
    ],
    date: '2022-03',
    category: '3D Design, 3D Printing, Engineering',
    thumbnail: 'thumbnail.png',
    images: ['Snapchat-1796948528.jpg'],
  },
  {
    id: 'project-15',
    title: 'Custom Deej Volume Mixer',
    shortDescription: 'An Arduino-based analog volume controller with custom-designed 3D-printed and laser-marked knobs.',
    longDescription: `Based on the open-source deej project, this hardware volume mixer uses an Arduino Nano to translate analog potentiometer values into PC volume controls. I custom-designed the knobs in 3D and laser-marked unique logos onto black aluminum discs. A key technical highlight of this build was the integration of these aluminum discs into the knobs mid-print, creating a seamless and high-end tactile finish.`,
    technologies: [
      'Arduino Nano',
      'Soldering',
      '3D Design',
      'Laser Marking & Cutting',
    ],
    date: '2026-01',
    category: 'Electronics, IoT, 3D Design',
    thumbnail: 'thumbnail.jpg',
    images: ['config.png', 'sc_IDE.png'],
  },
]

