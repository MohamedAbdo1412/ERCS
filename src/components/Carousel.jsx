
import { Carousel } from '@mantine/carousel';
import Card_Component from './Card'
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

export default function Carousel_Component() {
  const team = [
    {
      Name: "Mohamed Abdelhamid",
      Linkedin: "https://www.linkedin.com/in/mohamedabdelhamid2005/",
      position: "Team Leader",
      badgeColor: "indigo",
      Image: team1,
      description:
        "Leads and coordinates the team, ensuring smooth communication and steady progress while managing tasks, planning strategies, and guiding members toward achieving project goals."
    },

    {
      Name: "Sara Hussien",
      Linkedin: "https://www.linkedin.com/in/sara-mahmoud",
      position: "Communication Advisor",
      badgeColor: "grape",
      Image: team3,
      description:
        "Handles internal and external communication, prepares project updates, and ensures that information is delivered clearly and effectively across all team members and partners."
    },

    {
      Name: "Ahmed Attia",
      Linkedin: "https://www.linkedin.com/in/youssef-hany",
      position: "Web Developer",
      badgeColor: "violet",
      Image: team2,
      description:
        "Develops and maintains the project’s web platform, focusing on clean code, responsive interfaces, and smooth user experiences while supporting technical requirements."
    },

    {
      Name: "Safaa Adel",
      Linkedin: "https://www.linkedin.com/in/mariam-adel",
      position: "Hardware Advisor",
      badgeColor: "cyan",
      Image: team4,
      description:
        "Provides expertise in hardware components, assists with technical troubleshooting, and ensures that device-related decisions are reliable, efficient, and aligned with project needs."
    }
  ];

  return (
    <div key={2} className='Carousel-Container'>
      <h2 key={1}>Our<h2> Team</h2></h2>
      <Carousel
        slideSize="80%"
        height={700}
        slideGap="md"
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: 'center',

        }}
      >
        {team.map((member, index) => (
          <Carousel.Slide key={index}><Card_Component description={member.description} badge={member.badgeColor} position={member.position} name={member.Name} linkein={member.Linkedin} image={member.Image} /></Carousel.Slide>
        ))}

      </Carousel>
    </div>

  )
}

