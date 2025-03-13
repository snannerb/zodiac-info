const zodiacData = [
  {
    name: "Aries",
    image: "images/aries.png",
    element: "Fire",
    characteristics: "Adventurous, Energetic, Optimistic",
  },
  {
    name: "Taurus",
    image: "images/taurus.png",
    element: "Earth",
    characteristics: "Reliable, Patient, Practical",
  },
  {
    name: "Gemini",
    image: "images/gemini.png",
    element: "Air",
    characteristics: "Adaptable, Outgoing, Intelligent",
  },
  {
    name: "Cancer",
    image: "images/cancer.png",
    element: "Water",
    characteristics: "Loyal, Emotional, Intuitive",
  },
  {
    name: "Leo",
    image: "images/leo.png",
    element: "Fire",
    characteristics: "Confident, Ambitious, Generous",
  },
  {
    name: "Virgo",
    image: "images/virgo.png",
    element: "Earth",
    characteristics: "Analytical, Hardworking, Practical",
n  },
  {
    name: "Libra",
    image: "images/libra.png",
    element: "Air",
    characteristics: "Diplomatic, Social, Fair-minded",
  },
  {
    name: "Scorpio",
    image: "images/scorpio.png",
    element: "Water",
    characteristics: "Passionate, Resourceful, Focused",
  },
  {
    name: "Sagittarius",
    image: "images/sagittarius.png",
    element: "Fire",
    characteristics: "Optimistic, Honest, Adventurous",
  },
  {
    name: "Capricorn",
    image: "images/capricorn.png",
    element: "Earth",
    characteristics: "Disciplined, Responsible, Patient",
  },
  {
    name: "Aquarius",
    image: "images/aquarius.png",
    element: "Air",
    characteristics: "Innovative, Independent, Humanitarian",
  },
  {
    name: "Pisces",
    image: "images/pisces.png",
    element: "Water",
    characteristics: "Compassionate, Artistic, Intuitive",
  },
];

const zodiacSelect = document.getElementById("zodiac-select");
const zodiacImage = document.getElementById("zodiac-image");
const zodiacName = document.getElementById("zodiac-name");
const zodiacElement = document.getElementById("zodiac-element");
const zodiacCharacteristics = document.getElementById("zodiac-characteristics");

zodiacSelect.addEventListener("change", function () {
  const selectedZodiac = this.value;
  const zodiac = zodiacData.find((z) => z.name === selectedZodiac);

  if (zodiac) {
    zodiacImage.src = zodiac.image;
    zodiacImage.alt = `${zodiac.name} Image`;
    zodiacName.textContent = zodiac.name;
    zodiacElement.textContent = zodiac.element;
    zodiacCharacteristics.textContent = zodiac.characteristics;

    // Error handling for missing images
    zodiacImage.onerror = () => {
      zodiacImage.src = "images/placeholder.png"; // Fallback image
      zodiacImage.alt = "Image not available";
    };
  } else {
    zodiacImage.src = "";
    zodiacImage.alt = "";
    zodiacName.textContent = "";
    zodiacElement.textContent = "";
    zodiacCharacteristics.textContent = "";
  }
});