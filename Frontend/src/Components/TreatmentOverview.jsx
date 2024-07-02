import React, { useRef } from 'react';
import NeedHelp from './NeedHelp';
import FAQs from '../Components/FAQs';
import PatientStories from '../Components/PatientStories';
import TopDoctors from '../Components/TopDoctors';
import RecommendedHospitals from './RecommendedHospitals'
const TreatmentOverview = () => {
    const overviewRef = useRef(null);
    const eligibilityRef = useRef(null);
    const preparationRef = useRef(null);
    const aboutRef = useRef(null);
    const postTreatmentRef = useRef(null);
    const recoveryTipsRef = useRef(null);
    const faqsRef = useRef(null);
    const patientStoriesRef = useRef(null);
    const topDoctorsRef = useRef(null);
    const recommendedHospitalsRef = useRef(null);
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className=" font-sans">
            <div className='container mx-auto p-4'>
            <nav className="flex space-x-8 mb-8 border-b pb-4 overflow-x-auto">
                <button onClick={() => scrollToSection(overviewRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Overview</button>
                <button onClick={() => scrollToSection(eligibilityRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Eligibility</button>
                <button onClick={() => scrollToSection(preparationRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Preparation</button>
                <button onClick={() => scrollToSection(aboutRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">About Treatment</button>
                <button onClick={() => scrollToSection(postTreatmentRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Post-Treatment Care</button>
                <button onClick={() => scrollToSection(recoveryTipsRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Recovery Tips</button>
                <button onClick={() => scrollToSection(faqsRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">FAQs</button>
                <button onClick={() => scrollToSection(patientStoriesRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Patient Stories</button>
                <button onClick={() => scrollToSection(topDoctorsRef)} className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Top Doctors</button>
            </nav>
    
            <div className="mb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">Treatment Overview</h1>
                        <p className="mb-4 text-gray-600">
                            Lorem incididunt ut labore ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="mb-4 text-gray-600">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <p className="mb-4 text-gray-600">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://ucmscdn.healthgrades.com/f7/e0/50c062cc41ca9e0a3b458f417d84/image-getty-170083410.jpg" alt="Treatment Overview" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
            <hr className="border-dashed border-blue-200 my-8" />
    
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <div ref={eligibilityRef} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Eligibility For Treatment</h2>
                        <p className="mb-4 text-gray-600">Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</p>
                        <p className="mb-2 text-gray-700">In general, gastric bypass could be a good option if:</p>
                        <ul className="list-none pl-5 mb-4">
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> The BMI (body mass index) is 40 or more</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> You are willing to make permanent changes in the lifestyle</li>
                        </ul>
                    </div>
    
                    <div ref={preparationRef} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Preparation Before Treatment</h2>
                        <p className="mb-4 text-gray-600">Proper preparation is crucial for a successful gastric bypass procedure. Your doctor will provide specific instructions, but general preparations may include:</p>
                        <ul className="list-none pl-5 mb-4">
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Undergoing various medical tests and evaluations</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Following a special pre-operation diet</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Quitting smoking and avoiding alcohol</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Arranging for post-surgery care and support</li>
                        </ul>
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
    
                    <div ref={aboutRef} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Treatment</h2>
                        <p className="mb-4 text-gray-600">Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</p>
                        <p className="mb-2 text-gray-700">In general, gastric bypass could be a good option if:</p>
                        <ul className="list-none pl-5 mb-4">
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> The BMI (body mass index) is 40 or more</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> You are willing to make permanent changes in the lifestyle</li>
                        </ul>
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
    
                    <div ref={postTreatmentRef} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Post-Treatment Care Treatment</h2>
                        <p className="mb-4 text-gray-600">After gastric bypass surgery, proper care is essential for recovery and long-term success. Your medical team will provide specific instructions, but general post-treatment care may include:</p>
                        <ul className="list-none pl-5 mb-4">
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Following a strict diet plan</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Taking prescribed supplements and medications</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Attending follow-up appointments</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Gradually increasing physical activity</li>
                        </ul>
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
    
                    <div ref={recoveryTipsRef} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Treatment Recovery Tips</h2>
                        <p className="mb-4 text-gray-600">Recovery after gastric bypass surgery is a gradual process. Here are some tips to help you recover and adjust to your new lifestyle:</p>
                        <ul className="list-none pl-5 mb-4">
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Follow your doctor's dietary guidelines strictly</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Stay hydrated, but avoid drinking with meals</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Take small, frequent meals</li>
                            <li className="flex items-center mb-2 text-gray-600"><span className="text-blue-500 mr-2">●</span> Engage in regular, gentle exercise as approved by your doctor</li>
                        </ul>
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
    
                    <div ref={faqsRef}>
                        <FAQs />
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
    
                    <div ref={patientStoriesRef}>
                        <PatientStories />
                    </div>
    
                    <hr className="border-dashed border-blue-200 my-8" />
                   
                </div>
    
                <div className="lg:w-1/3">
                    <NeedHelp />
                </div>
            </div>
            </div>
            <div ref={topDoctorsRef}>
                        <TopDoctors />
                    </div>
                    <div ref={recommendedHospitalsRef}>
                    <RecommendedHospitals />
                </div>
        </div>
    );
};

export default TreatmentOverview;