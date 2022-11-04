import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { JobsContext } from "../../context/jobsContext";
import {
  JobDetailedContainer,
  JobDetailedLeftSide,
  JobDetailedMap,
  JobDetailedNav,
  JobDetailedNavBtn,
  JobDetailedNavMenu,
  Title,
  ContentTitle,
  TitlePrice,
  SubtitlePrice,
  SubTitle,
  JobDetailedInformation,
  JobsOrderList,
  ButtonEmployment,
  ButtonGroup,
  ImageGroup,
  Image,
  ButtonBack,
  TitleNameCompany,
  CompanyInformation,
  Contacts,
  Map,
  Point,
  MapContent,
  Links,
  ButtonContent,
  ContactsNav,
} from "./styled";
import Rectangle from "../../assets/icons/Rectangle";
import Share from "../../assets/icons/Share";
import Button from "../../Components/Button";
import { IJob } from "../../types";
import Circle from "../../assets/icons/Circle";
// @ts-ignore
import logo from "../../assets/icons/map.png";
// @ts-ignore
import map from "../../assets/icons/img.png";
import BackArrow from "../../assets/icons/BackArrow";
import { transformDate } from "../../helpers/transformDate";
import { Loader } from "../../Components/Loader/Loader";
import ErrorIndicator from "../../Components/ErrorBoundary/ErrorIndicator";

const JobDetailed: FC = () => {
  const { id } = useParams();
  const { currentJobs, loading, error } = useContext(JobsContext);
  const navigate = useNavigate();
  const [job, setJob] = useState<IJob>();

  useEffect(() => {
    const job = currentJobs.find((item) => item.id === id);
    setJob(job);
  }, [currentJobs]);
  if (loading && !error) {
    return <Loader />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <div>
      <JobDetailedContainer>
        <JobDetailedLeftSide>
          <JobDetailedNav>
            <h1>Job Details</h1>
            <JobDetailedNavMenu>
              <Rectangle />
              <JobDetailedNavBtn first>Save to my list</JobDetailedNavBtn>
              <Share />
              <JobDetailedNavBtn>Share</JobDetailedNavBtn>
            </JobDetailedNavMenu>
          </JobDetailedNav>
          <Button>Apply now</Button>
          <ContentTitle>
            <Title>{job?.title}</Title>
            <TitlePrice>
              € {job?.salary}
              <SubtitlePrice>Brutto, per year</SubtitlePrice>
            </TitlePrice>
          </ContentTitle>
          <SubTitle>Posted {transformDate(job?.createdAt)} days ago</SubTitle>
          <JobDetailedInformation>
            <p>{job?.description}</p>
            <h3>Responsibilities</h3>
            <p>
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare
            </p>
            <p>
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare
            </p>
            <p>
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare
            </p>
            <h3>Compensation & Benefits:</h3>
            <JobsOrderList>
              {job?.benefits.map((item) => (
                <li key={uuid()}>{item}</li>
              ))}
            </JobsOrderList>
          </JobDetailedInformation>
          <Button>Apply now</Button>
          <JobDetailedNav>
            <h1>Additional info</h1>
          </JobDetailedNav>
          <p>Employment type</p>
          <ButtonGroup>
            {job?.employment_type.map((item) => (
              <ButtonEmployment key={uuid()}>{item}</ButtonEmployment>
            ))}
          </ButtonGroup>
          <p>Benefits</p>
          <ButtonGroup last>
            {job?.benefits.map((item) => (
              <ButtonEmployment key={uuid()} yellow>
                {item}
              </ButtonEmployment>
            ))}
          </ButtonGroup>
          <JobDetailedNav>
            <h1>Attached images</h1>
          </JobDetailedNav>
          <ImageGroup>
            {job?.pictures.map((item) => (
              <Image key={uuid()} src={item} alt="job-detail" />
            ))}
          </ImageGroup>
        </JobDetailedLeftSide>
        <ContactsNav>
          <h1>Contacts</h1>
        </ContactsNav>
        <JobDetailedMap>
          <Circle />
          <CompanyInformation>
            <TitleNameCompany>{job?.name}</TitleNameCompany>
            <Contacts>
              <div>
                <Map src={map} alt="map" />
                <span>{job?.address}</span>
                <div>Gürtel 18-20</div>
              </div>
              <Links href={`tel:${job?.phone}`}>{job?.phone}</Links>
              <Links href={`mailto:${job?.email}`}>{job?.email}</Links>
            </Contacts>
            <MapContent>
              <img style={{ width: "400px" }} src={logo} alt="map" />
              <Point src={map} alt="map" />
            </MapContent>
          </CompanyInformation>
        </JobDetailedMap>
      </JobDetailedContainer>
      <ButtonBack onClick={() => navigate(-1)}>
        <BackArrow /> <ButtonContent>RETURN TO JOB BOARD</ButtonContent>
      </ButtonBack>
      ;
    </div>
  );
};

export default JobDetailed;
