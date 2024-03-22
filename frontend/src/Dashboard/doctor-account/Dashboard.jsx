import { useState } from "react";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/UserFetchData";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState("overview");
  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && !error && <Loader />}
          {error && !loading && <Error />}

          {!loading && !error && (
            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />
              <div className="lg:col-span-2">
                {/* check the condition  condition true then approved is pending approved then not data show  */}
                {data.isApproved === "pending" && (
                  <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#2196f3"
                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"
                      ></path>
                    </svg>

                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium">
                      To get approval please complete your profile. We&apos;ll
                      review manually and approve within 3days.
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  {tab === "overview" && (
                    <div>
                      <div className="flex items-center gap-4 mb-10">
                        <figure className="max-w-[200px] max-h-[200px]">
                          <img src={data?.photo} alt="" className="w-full" />
                        </figure>

                        <div>
                          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                            Surgeon
                          </span>

                          <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                            {data.name}
                          </h3>

                          <div className="flex items-center gap-[6px]">
                            <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                              <img src={starIcon} alt="" />
                              4.5
                            </span>
                            <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                              (233)
                            </span>
                          </div>

                          <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                            docotr bio
                          </p>
                        </div>
                      </div>

                      <DoctorAbout
                        name={data.name}
                        about={data.about}
                        qualification={data.qualification}
                        experiences={data.experiences}
                      />
                    </div>
                  )}

                  {tab === "appointments" && <div>appointments</div>}
                  {tab === "settings" && <Profile />}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
