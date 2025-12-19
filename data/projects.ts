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
        'Embedded C/C++',
        'PCB Design',
        '3D Printing',
        'Node-RED',
        'Telegram Bot',
      ],
    date: '2025',
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
    date: '2025',
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
      'Laser Engraving',
      'Laser Cutting',
      'QGIS',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Falcon Design Space',
      'Woodworking',
    ],
    date: '2025',
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
    date: '2025',
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
    date: '2023',
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
    date: '2024',
    category: 'IoT, Embedded Systems, Automation',
    thumbnail: 'thumbnail.jpg',
    images: ['PXL_20241108_214823380.MP.jpg', 'Snapchat-1444146788~2.jpg', 'Snapchat-700415472.mp4', 'Snapchat-894461259.mp4'],
  },
]

