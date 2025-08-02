import React, { useEffect, useState  } from "react";
import { API_BASE_URL,BASE_URL, getTeam } from "../../api";
export default function Team() {

   const [teams, setTeams] = useState([]);
    
      useEffect(() => {
        const fetchTeams = async () => {
          try {
            const data = await getTeam();
            setTeams(data);
          } catch (error) {
            // Already logged in API function
          }
        };
    
        fetchTeams();
      }, []);
  return (
    <div><>
    {/* Team Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 className="mb-0">
            Professional Stuffs Ready to Help Your Business
          </h1>
        </div>
        <div className="row g-5">

          {teams.map((team, index) => (
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={`${BASE_URL}/${team.image}`} alt="" />
                <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={team.twitter}
                  >
                    <i className="fab fa-twitter fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={team.facebook}
                  >
                    <i className="fab fa-facebook-f fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={team.instagram}
                  >
                    <i className="fab fa-instagram fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href={team.linkdin}
                  >
                    <i className="fab fa-linkedin-in fw-normal" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">{team.fullname}</h4>
                <p className="text-uppercase m-0">{team.designation}</p>
              </div>
            </div>
          </div>
         ))}
         

          
        </div>
      </div>
    </div>
    {/* Team End */}
  </>
  </div>
  )
}
