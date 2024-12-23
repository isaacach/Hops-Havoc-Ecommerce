/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import "./hopfilter.css";

export const HopFilter = ({ filterHops, handleFilterClick }) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showPurposes, setShowPurposes] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const notes = new Set();
  const purposes = new Set();
  const beerStyles = new Set();
  const countries = new Set();
  
  filterHops.map((hop) => {
    const splitNotes = hop.profile.split(", ");
    const splitPurposes = hop.purpose.split(" & ");
    const splitBeerStyles = hop.beer_style.split(", ");
    const splitCountries = hop.country.split(", ");

    splitNotes.map((note) => {
      notes.add(note);
    });
    splitPurposes.map((purpose) => {
      purposes.add(purpose);
    });
    splitBeerStyles.map((style) => {
      beerStyles.add(style);
    });
    splitCountries.map((country) => {
      countries.add(country);
    });
  });

  const handleNotesClick = () => {
    setShowNotes(!showNotes);
    setShowPurposes(false);
    setShowStyles(false);
    setShowCountries(false);
  }

  const handlePurposesClick = () => {
    setShowPurposes(!showPurposes);
    setShowNotes(false);
    setShowStyles(false);
    setShowCountries(false);
  }

  const handleStylesClick = () => {
    setShowStyles(!showStyles);
    setShowNotes(false);
    setShowPurposes(false);
    setShowCountries(false);
  }

  const handleCountriesClick = () => {
    setShowCountries(!showCountries);
    setShowNotes(false);
    setShowPurposes(false);
    setShowStyles(false);
  };

  const handleClick = (event) => {
    const clickedFilter = event.target.parentElement.parentElement.innerHTML;
    const clickedFilterValue = event.target.innerHTML;
    handleFilterClick(clickedFilter, clickedFilterValue)
  }


  return (
    <div className="filter">
      <div className="titleFilter">
        <p onClick={handleNotesClick}>
          Notes
          <BiSolidDownArrow />
        </p>
        {showNotes && <div className="dropdown">
          {[...notes].map((note, index) => 
              <p key={index} onClick={handleClick} >{note}</p>
          )}
        </div>}
      </div>
      <div className="titleFilter">
        <p onClick={handlePurposesClick}>
          Purpose
          <BiSolidDownArrow />
        </p>
        {showPurposes && <div className="dropdown">
          {[...purposes].map((note, index) => 
            <p key={index}>{note}</p>
          )}
        </div>}
      </div>
      <div className="titleFilter">
        <p onClick={handleStylesClick}>
          Beer Styles
          <BiSolidDownArrow />
        </p>
        {showStyles && <div className="dropdown">
          {[...beerStyles].map((note, index) => 
            <p key={index}>{note}</p>
          )}
        </div>}
      </div>
      <div className="titleFilter">
        <p onClick={handleCountriesClick}>
          Country
          <BiSolidDownArrow />
        </p>
        {showCountries && <div className="dropdown">
          {[...countries].map((note, index) => 
            <p key={index}>{note}</p>
          )}
        </div>}
      </div>
    </div>
  );
};
