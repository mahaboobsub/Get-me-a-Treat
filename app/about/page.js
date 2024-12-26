import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">About Empower My Campus</h1>
            <p className="text-lg mb-6">
                Empower My Campus is a crowdfunding platform designed to help Tier-3 colleges fund their events and initiatives with the support of contributors and communities. It&apos;s a space where your college can directly receive contributions to bring ideas to life. Unlock the power of community support and drive growth for your campus.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/group.gif" alt="Communities Want to Collaborate" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Communities Want to Collaborate</h3>
                        <p>Your community is enthusiastic about collaborating on your college’s events and initiatives.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/coin.gif" alt="Support Through Contributions" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Support Through Contributions</h3>
                        <p>Receive support from contributors who are passionate about fostering innovation and growth at your college.</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Colleges</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Direct financial support for events, workshops, and infrastructure improvements</li>
                <li className="mb-2">Engage with contributors and build collaborative relationships</li>
                <li className="mb-2">Access a platform designed to support campus needs</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Contributors</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Directly impact the future of education by funding college initiatives</li>
                <li className="mb-2">Receive recognition for your contributions to academic growth</li>
                <li className="mb-2">Be part of a meaningful change and support innovation</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Unlock new opportunities through collaboration with like-minded individuals</li>
                <li className="mb-2">Expand your network and strengthen community ties</li>
                <li className="mb-2">Combine resources to achieve impactful results</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Foster a supportive community of educators, students, and contributors</li>
                <li className="mb-2">Encourage innovation through valuable feedback and collaboration</li>
                <li className="mb-2">Participate in discussions and events to share ideas and grow together</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Gain access to tutorials, templates, and tools to enhance your initiatives</li>
                <li className="mb-2">Receive mentorship and guidance from experienced professionals</li>
                <li className="mb-2">Stay updated on the latest trends and best practices in education</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Showcase your college’s initiatives to a global audience</li>
                <li className="mb-2">Build credibility and reputation as a hub for innovation and creativity</li>
                <li className="mb-2">Celebrate and recognize contributors who make a difference</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Join a community that values collaboration and inclusivity</li>
                <li className="mb-2">Find encouragement and inspiration from fellow members</li>
                <li className="mb-2">Collaborate on initiatives and share resources for mutual growth</li>
            </ul>
        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Empower My Campus",
}
