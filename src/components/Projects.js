import React, { Component } from "react";
import "./Projects.css";
import Poster01 from "../images/klper.png";
import Poster02 from "../images/202009-movieapp.png";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "K:LPER",
        year: "2020.05 ~ 2020.07",
        poster: Poster01,
        summary:
          "국내 거주 외국인을 대상으로 그들이 생활하는데 어려움을 겪었던 부분에 대해 '대행 서비스'를 제공하는 멀티 플랫폼 기반의 웹서비스. Java를 기반으로한 Spring Framework를 통해 구축하였고 AWS EC2를 통하여 배포하였다. 비트캠프 신촌센터 수료를 위해 수강기간 마지막 2달 동안 만들었던 프로젝트. 최대한 실무에서 하는 것처럼, 기획 단계에서 기획서, 일정표, 프로젝트 수행 조직도, 요구사항 정의서, 사용자 거래시 요구사항 순서도, 기능리스트 등을 작성하였고, 설계 단계에서는 화면정의서, 페르소나, 스토리보드, DB정규화, 개념적 ERD, 논리적 ERD, 테이블 상세표, 테이블 정의서, 시퀀스 다이어그램, 유즈케이스 다이어그램 등을 작성하였다. 그리고 이해를 위한 Throwaway prototyping을 사용하여, 팀원들의 이해를 돕고 설계 결과를 빠르게 도출한 다음, 새로운 양식으로 실제 서비스를 구축하였다. 더 자세한 내용은 Youtube에 서비스 소개가 있다.",
        techs: [
          "Java",
          "Python",
          "JSP",
          "Spring MVC",
          "Spring Security",
          "MyBatis",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "D3.js",
          "Bootstrap",
          "KakaoPay API",
          "SSL",
          "XML",
          "AWS EC2",
        ],
        urls: ["https://klper.com/", "https://youtu.be/CgxLHxt_A8M"],
      },
      {
        id: 2,
        title: "Movie App",
        year: "2020.09 ~ 2020.09",
        poster: Poster02,
        summary:
          "React의 기초를 알기위해 들었던 인터넷강의를 기반으로 간단하게 만들어본 React App. yts라는 영화사이트 API를 사용하여 해당 사이트의 영화리뷰점수 Top20의 영화 리스트와 상세정보를 가져와 보여주는 App이다. 이 App 덕분에 GitBlog를 만드는데 많은 도움이 되었다.",
        techs: ["React"],
        urls: ["https://arav-easy1.github.io/20200915-movie_app/"],
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <div className="projects">
        {projects.map((project) => (
          <div className="project">
            <img
              src={project.poster}
              alt={project.title}
              title={project.title}
            />
            <div className="project_data">
              <h3 className="project_title">{project.title}</h3>
              <h5 className="project_year">{project.year}</h5>
              <ul className="project_techs">
                {project.techs.map((tech, index) => (
                  <li key={index} className="techs_tech">
                    {tech}
                  </li>
                ))}
              </ul>
              <ul className="project_urls">
                {project.urls.map((url, index) => (
                  <li key={index} className="project_url">
                    <a href={url}>{url}</a>
                  </li>
                ))}
              </ul>

              <p className="project_summary">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
