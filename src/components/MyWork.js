import React, { Fragment } from "react";

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">Coffee Roster</h4>
              <h6>
                Coffee Roster is a admin dashborad panel application that
                allowing customers to browse a menu of coffee and other drinks,
                customize their orders, and save their favorite items. The
                application provides a simple and intuitive ordering process
                that allows customers to select their preferred drink size, add
                toppings, and specify other preferences before checking out.
                Coffee Roster also includes features, such as the ability to
                view order history and manage payment methods, as well as
                providing shop owners with data analysis and menu management
                tools.
              </h6>
              <h4 className="animate-charcter2"> Freelancer</h4>
            </div>
            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">
                Alaina Car webapp
              </h4>
              <h6>
                ALAINA is a comprehensive ride-hailing web application that
                allows users to request rides, track their ride history, and
                manage payment methods. The application provides a user-friendly
                interface for drivers to receive ride requests, navigate to
                pickup and dropoff locations, and receive payment for completed
                trips. With three distinct user roles (admin, user, and
                superadmin), ALAINA offers a flexible and customizable system
                for managing user accounts, monitoring ride activity, and
                administering payment transactions.
              </h6>
              <h4 className="animate-charcter2"> Freelancer</h4>
            </div>

            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">Pubgisco Game</h4>
              <h6>
                Constructed a system where more than 1000 players can play
                different tournaments of PubG and able to create new tournament
                with super admins permission.Designed a database and created 137
                API to serve data for front-end and added authentication using
                Firebase.
              </h6>
              <h4 className="animate-charcter2"> Exomoon Infotech</h4>
            </div>

            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">
                On-Campus Housing System
              </h4>
              <h6>
                Built a system for on-campus housing referring UTA Housing
                Dataset targeting 4 different dependent interfaces. Integrated
                schemas and API in React front-end and added authentication
                utilizing Spring Boot. Engineered a system to notify residents
                whose leases are coming up for renewal with new contract
                information
              </h6>
              <h4 className="animate-charcter2"> Exomoon Infotech</h4>
            </div>
            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">
                Smart Streetlight Fault Detection System{" "}
              </h4>
              <h6>
                An Arduino based Smart Street light system has been proposed
                which detect when light is turned off and inform to the system
                administrator through SMS.
              </h6>
              <h4 className="animate-charcter2"> Exomoon Infotech</h4>
            </div>
            <div className="col-md-4 text-center my-2">
              <h4 className="ff-jose my-1 animate-charcter">
                Question Paper Generator
              </h4>
              <h6>
                Programmed a Flask app to Generate Question paper of a given
                Subject using books dataset. Utilized relation database advanced
                queries to generate 100+ random questions according to pattern.
                Applied a logic to clean, format, normalize, and vectorized
                reviews leveraging Pandas and flask for web application.
              </h6>
              <h4 className="animate-charcter2">
                {" "}
                Tvadartham Technology Pvt Ltd
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
