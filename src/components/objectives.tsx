import React from 'react';
import { 
    FaGlobe, FaCrown, FaMicrophoneAlt, FaHandshake, FaLightbulb, 
    FaSearch, FaBook, FaUsers, FaLandmark, FaTools, FaGlobeAsia, 
    FaPeace, FaChartLine, FaRocket 
} from 'react-icons/fa';
import { GiEarthAfricaEurope, GiPeaceDove, GiBrain, GiDiploma, GiNetworkBars } from 'react-icons/gi';
import { AiOutlineRise, AiOutlineTool } from 'react-icons/ai';
import { MdCampaign } from 'react-icons/md';
import { HiOutlineUserGroup, HiOutlineGlobeAlt } from 'react-icons/hi';
import Heading from '../constants/Heading';

const objectives = [
    {
        title: "Enhance Global Awareness",
        description: "Foster a deeper understanding of international relations, diplomacy, and global issues among participants.",
        icons: [<FaGlobe className="text-3xl" />, <GiEarthAfricaEurope className="text-3xl" />],
        featured: true
    },
    {
        title: "Develop Leadership Skills",
        description: "Provide a platform for students to take initiative, lead committees, and make impactful decisions.",
        icons: [<FaCrown className="text-3xl" />, <AiOutlineRise className="text-3xl" />],
        tall: true
    },
    {
        title: "Improve Public Speaking",
        description: "Help participants build confidence and enhance their oratory and presentation skills.",
        icons: [<FaMicrophoneAlt className="text-3xl" />, <MdCampaign className="text-3xl" />]
    },
    {
        title: "Promote Negotiation",
        description: "Teach the art of negotiation, compromise, and consensus-building through simulations of real-world scenarios.",
        icons: [<FaHandshake className="text-3xl" />, <GiPeaceDove className="text-3xl" />],
        wide: true
    },
    {
        title: "Critical Thinking",
        description: "Challenge participants to analyze complex issues and develop creative, effective solutions.",
        icons: [<GiBrain className="text-3xl" />, <FaLightbulb className="text-3xl" />]
    },
    {
        title: "Research Skills",
        description: "Encourage thorough research and understanding of assigned countries, topics, and policies.",
        icons: [<FaSearch className="text-3xl" />, <FaBook className="text-3xl" />]
    },
    {
        title: "Teamwork & Collaboration",
        description: "Provide opportunities to work in teams, collaborate with diverse individuals, and achieve common goals.",
        icons: [<FaUsers className="text-3xl" />, <HiOutlineUserGroup className="text-3xl" />],
        tall: true
    },
    {
        title: "UN Mechanisms",
        description: "Simulate the functioning of United Nations committees to educate students about its structure and operations.",
        icons: [<FaLandmark className="text-3xl" />, <GiDiploma className="text-3xl" />]
    },
    {
        title: "Problem-Solving",
        description: "Provide hands-on experience in addressing global challenges and proposing actionable resolutions.",
        icons: [<FaTools className="text-3xl" />, <AiOutlineTool className="text-3xl" />]
    },
    {
        title: "Networking",
        description: "Connect with peers, mentors, and experts with similar interests.",
        icons: [<HiOutlineGlobeAlt className="text-3xl" />, <GiNetworkBars className="text-3xl" />]
    },
    {
        title: "Respect for Diversity",
        description: "Promote respect for diverse cultures, perspectives, and opinions through discussions and debates.",
        icons: [<FaGlobeAsia className="text-3xl" />, <FaPeace className="text-3xl" />],
        wide: true
    },
    {
        title: "Real-World Preparation",
        description: "Equip students with skills for future roles in diplomacy, governance, and international relations.",
        icons: [<FaChartLine className="text-3xl" />, <FaRocket className="text-3xl" />]
    }
];

const Objectives = () => {
    return (
        <div id="objectives" className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Heading className="h1 text-color-title bg-blue-650" title='Our Objectives' />
                    <p className="mt-4 text-lg text-gray-600">Empowering future leaders through diplomatic simulation</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {objectives.map((objective, index) => (
                        <div 
                            key={index}
                            className={`
                                relative overflow-hidden shadow-md
                                bg-white rounded-2xl p-6
                                border border-gray-100
                                hover:shadow-lg hover:border-blue-100
                                transition-all duration-300 ease-in-out
                                flex flex-col justify-between
                                group
                                ${objective.featured ? 'md:col-span-2 md:row-span-2' : ''}
                                ${objective.wide ? 'md:col-span-2' : ''}
                                ${objective.tall ? 'md:row-span-2' : ''}
                            `}
                        >
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-50"></div>
                            
                            {/* Content */}
                            <div className="relative">
                                <div className="flex items-center justify-center space-x-4 mb-4">
                                    {objective.icons.map((icon, iconIndex) => (
                                        <span 
                                            key={iconIndex} 
                                            className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                                        >
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                                <h3 className={`
                                    text-center mb-3 font-bold
                                    ${objective.featured ? 'text-2xl' : 'text-xl'}
                                    text-gray-900 group-hover:text-blue-900
                                    transition-colors duration-300
                                `}>
                                    {objective.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700">
                                    {objective.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Objectives;