import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Users } from 'lucide-react';

const trustItems = [
  {
    icon: <Award size={24} />,
    title: "40+ Years of Trust",
    desc: "A trusted textile destination since 1978 on Main Bazar Road, Ilkal."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Curated Quality",
    desc: "100% authentic silk-mark certification & GI-tagged handlooms."
  },
  {
    icon: <Users size={24} />,
    title: "For Every Generation",
    desc: "Thoughtfully curated ensembles for brides, grooms, elders & children."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Personal Service",
    desc: "Seasoned drape stylists and virtual video consultation desks."
  }
];

const TrustSection = () => {
  return (
    <section className="landing-section-padding">
      <div className="landing-container">
        
        <div className="landing-text-center">
          <div className="landing-section-subtag">
            <span className="landing-dec-line"></span>
            THE JAIN CLOTH GUARANTEE
            <span className="landing-dec-line"></span>
          </div>
          <h2 className="landing-section-headline">
            Why Generations Choose Us
          </h2>
        </div>

        <div className="landing-trust-grid">
          {trustItems.map((item, idx) => (
            <div key={idx} className="landing-trust-card">
              <div className="landing-trust-icon">
                {item.icon}
              </div>
              <h3 className="landing-trust-title">{item.title}</h3>
              <p className="landing-trust-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
