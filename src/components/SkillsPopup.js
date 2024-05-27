import React from 'react'
import { PropTypes } from 'prop-types'
function SkillsPopup({onClose,skills}) {
  return (
    <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>x</button>
                <div>
                <h2>{skills.title}</h2>
                    <ul>
                        {skills.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
  )
};

SkillsPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    skills: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

export default SkillsPopup
