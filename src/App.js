import React, { useState, useEffect } from "react";
import "./App.css";

const Slideshow = ({ imgs, imgs1 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    if (index === imgs1.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
    if (index === 0) {
      setIndex(imgs1.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="max-h-[645px] text-center relative overflow-hidden items-center">
      <button
        className="absolute left-[0%] top-auto right-auto bottom-[35%] z-[1] bg-transparent overflow-visible "
        onClick={prev}
      >
        <img
          src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a60ac0afc70e2df86b12c4_leftarrow.svg"
          className="align-middle w-[100%] box-border"
        ></img>
      </button>
      <div className="h-auto absolute left-auto top-[0%] right-[0%] bottom-auto flex overflow-visible w-[60%] mt-[10px] mr-[10px] ml-[30%] justify-center items-center">
        <img src={imgs1[index]} className="rounded-[25px] relative h-[100%] " />
      </div>
      <div className="font-head w-[90%] mt-[180px] ml-[10%] px-[35px] pt-[20px] pb-[40px] rounded-[25px] bg-[url('https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a607b9d0f93c7569d8f7ed_background-testi.png')] bg-cover">
        <img
          src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a60940e1597d07f26ab940_dots.svg"
          className="block relative left-[-22%] width-[80%] max-w-full align-middle border-0 box-border"
        ></img>
        <div className="min-h-[100px] box-border ">
          <p className="mb-[10px] mt-0 text-[18px] relative text-center">
            "{imgs[index].first}
            <strong>{imgs[index].strong}</strong>
            {imgs[index].last}"
          </p>
          <p>&zwj;</p>
        </div>
        <div className="flex mt-[25px] items-center flex-col">
          <h4 className="mt-[0px] mb-[20px] font-sign text-[36px] leading-[28px] font-[500]">
            {imgs[index].sign}
          </h4>
          <div className="italic bg-transparent">{imgs[index].job}</div>
        </div>
      </div>

      <div>
        <button
          onClick={next}
          className="absolute left-auto top-auto right-[0%] bottom-[35%] z-[1] bg-transparent overflow-visible "
        >
          <img
            src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a60aa1a4df865b99bf3711_right-arrow.svg"
            className="align-middle w-[100%] box-border"
          ></img>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <div className="bg-[#f5f1ee] text-[#1a1b1f] text-base font-normal min-h-full box-border">
        <div className="flex flex-row justify-between py-[20px] px-[30px] min-h-[20vh] h-auto items-center relative">
          <div className="flex flex-col fixed z-[1]">
            <a
              href="/"
              className="hover:text-[#84ceeb] hover:bg-[#f7f8f9] text-[#f27e6c] font-[700] font-main leading-[32px] text-[22px] tracking-[1px]"
            >
              home
            </a>
            <a
              href="/"
              className="hover:text-[#84ceeb] active:text-[#f27e6c] hover:bg-[#f7f8f9] font-black text-2xl"
            >
              about
            </a>
            <a
              href="/"
              className="hover:text-[#84ceeb] active:text-[#f27e6c] hover:bg-[#f7f8f9] font-black text-2xl"
            >
              community
            </a>
            <a
              href="/"
              className="hover:text-[#84ceeb] active:text-[#f27e6c] hover:bg-[#f7f8f9] font-black text-2xl"
            >
              team
            </a>
          </div>
          <div></div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a5fb6a476680115acebea5_Flori-logo.png"
              className="w-[90px] "
            ></img>
          </div>
          <div className="border-[2px] border-[#f27e6c] rounded-[50px] rotate-4 duration-300 border-solid bg-[#444443] text-center text-[#fff] box-border text-2xl px-[20px] pt-[10px] pb-[15px] ">
            join now
          </div>
        </div>
        <div className="relative py-0 px-[3%] bg-[#f5f1ee] ml-[15px] mr-[15px] box-border ">
          <div className="flex h-[40vh] mb-[40px] flex-col justify-center items-center bg-transparent bg-[url('https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a5f0c856b0a06bf4272798_together-flori.png')] bg-no-repeat bg-contain bg-center">
            <div className="w-auto flex h-[40vh] mr-auto mb-0 ml-auto pt-[10px] justify-center items-center box-border flex-1">
              <div className="text-[64px] font-[300] leading-[80px] inline-block mt-[10px] mb-[10px] text-[#444343] font-head">
                Seeding
                <strong className="text-[#fec2b2] font-bold box-border">
                  &nbsp;change.
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-[100%] max-w-[900px] mr-auto ml-auto box-border  ">
          <div className="w-[80%] mr-auto mb-[0px] ml-auto text-center ">
            <div className="mb-0 text-left text-[22px] leading-[36px] relative text-[#1e1e1e] font-[300] font-head">
              <p className="absolute">
                Flori is more than a seed-stage fund and a portfolio of
                startups: Our community of founders taps into the power of
                financial innovation to collaborate around global problems and{" "}
                <strong className="font-bold">unlock prosperity for all</strong>
                .
              </p>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61ae485f02a1f343d4416bbe_flower-hero.png"
            className="left-0 top-auto right-auto max-w-full w-[200px] "
          ></img>
        </div>
        <div className=" text-center items-center font-head font-[100] decoration-0 mb-[40px] text-[26px] leading-[44px] tracking-normal">
          Scroll to explore
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://freesvg.org/img/1539792897.png"
            className="align-middle box-border mt-0 w-[200px] self-center animate-bounce"
          ></img>
        </div>
        <div className="bg-[#fff]">
          <div className="py-[70px] relative flex overflow-hidden flex-row justify-center box-border text-center w-[100%] max-w-[900px] mr-auto ml-auto">
            <div className="pl-[5%] w-[100%] left-auto right-auto relative float-left ">
              <Slideshow
                imgs={[
                  {
                    text: "1",
                    first: "Together, we can onboard the",
                    strong: "next billion users",
                    last: " into the crypto ecosystem.",
                    sign: "Ruth Iselema",
                    job: "Bitmama",
                  },
                  {
                    text: "2",
                    first:
                      "Together, we can democratize access to the global economy for over",
                    strong: "1.5 billion Africans",
                    last: ".",
                    sign: "Bashin Aminu",
                    job: "Coinprofile",
                  },
                  {
                    text: "3",
                    first:
                      "Together, we can take whole regions into the new economy. Empowering people with",
                    strong: " technology, access and inclusion",
                    last: ".",
                    sign: "Alan Boryszanski",
                    job: "Cryptomate",
                  },
                  {
                    text: "4",
                    first: "Together, we can make the ",
                    strong: "benefits of defi more accessible",
                    last: " and thus empower more people and businesses.",
                    sign: "Ashley Taylor",
                    job: "ReSource",
                  },
                  {
                    text: "5",
                    first: "Together, we can make ",
                    strong: "automated trading",
                    last: " more transparent and accessible.",
                    sign: "Mario Stumpo",
                    job: "Yanda",
                  },
                  {
                    text: "6",
                    first: "“Together, we can enable ",
                    strong: "one billion digital solopreneurs",
                    last: " with mobile-first P2P commerce.",
                    sign: "Phillip Toth",
                    job: "heymate AG",
                  },
                ]}
                imgs1={[
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61affd4bf66d3dee54cdebde_bitmama%20team-p-500.jpeg",
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61a60c46865cf0e5a306c2b4_bashin-p-500.png",
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61ae219bda551c31b81b30bd_Alan.png",
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61c249a497c12e9588c2ac18_Ashley%20Taylor-p-500.jpeg",
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61bb438d0717792efc06fdc5_920c18de9981-group_photo-p-800.jpeg",
                  "https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61ae214964ace68088e68ce6_Phillip.png",
                ]}
              />
            </div>
            <div className="pl-[5%] w-full left-auto right-auto relative float-left pr-[10px] box-border">
              <h2 className="mb-[40px] font-head text-[22px] font-[300] tracking-[4px] uppercase mt-[20px] leading-[50px]">
                We achieve<br></br>
                <strong className="mt-[-10px] mb-[10px] font-main text-[52px] tracking-[normal] font-bold lowercase text-[#444]">
                  our mission
                </strong>
                <br></br>
              </h2>
              <h2 className="mb-[40px] font-head text-[22px] font-[300] tracking-[4px] uppercase mt-[20px] leading-[50px]">
                When our founders<br></br>
                <strong className="mt-[-10px] mb-[10px] font-main text-[52px] tracking-[normal] font-bold lowercase text-[#444]">
                  achieve theirs.
                </strong>
                <br></br>
              </h2>
              <div className="text-left text-[22px] leading-[36px] relative font-head text-[#1e1e1e] font-[300] tracking-normal ">
                <strong className="font-bold font-main text-[black]">
                  We believe in collective power to build the future
                </strong>{" "}
                . That’s why we’re building a community first, with our
                investment being just a means to create strong relationships
                among us. We facilitate and promote partnerships among our
                portfolio companies and support among our founders.
                <br></br>
              </div>
              <a
                href="/"
                className="mt-[40px] mr-auto ml-auto relative inline-block h-auto font-main text-[#444] text-[22px] border-[0.5px] border-[#f27e6c] rounded-[50px]"
              >
                <div className="border-[0.5px] border-[#f27e6c] rounded-[50px] rotate-4 duration-300 border-solid text-center text-[#444] box-border text-2xl px-[20px] pt-[10px] pb-[15px] ">
                  see more
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mr-auto ml-auto bg-[#ffd77914] bg-gradient-to-r from-[#f27e6c0f] to-[#f5f1ee] box-border">
          <div className="max-w-[1050px] text-start w-full mx-[20px] ">
            <h2 className="justify-start ml-[10%] mb-[40px] font-head text-[#1a1b1f] leading-[56px] font-[700] mt-[10px] text-[32px]">
              What's new with Flori.
            </h2>
            <div className="pt-[0px] static gap-2 flex flex-row min-h-[400px] w-full ml-[15%] flex-wrap ">
              <div className="w-[22%] mr-[0.5%] ml-[0.5%] block float-left ">
                <a className="mx-auto static inline-block w-auto flex-col">
                  <div className="relative h-full rotate-2 ">
                    <div className="absolute left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid border-[2px] border-[#ffd779] rounded-[25px] object-fill"></div>
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/62aae5d95eddbbc09fe096c4_%20300%20x%20300%20florish%20blog.jpeg"
                      className="overflow-hidden w-[100%] h-[100%] rounded-[25px] object-cover align-middle "
                    ></img>
                  </div>
                  <h4 className="mt-[20px] mb-[10px] font-head text-[#000] text-[25px] leading-[30px] tracking-[-0.025em] ">
                    Florish
                  </h4>
                  <div className="font-head text-[#00000080] text-[16px] leading-[26px] font-[400] ">
                    A look back at Florish - our founders retreat in Barcelona.
                  </div>
                </a>
              </div>
              <div className="w-[22%] mr-[0.5%] ml-[0.5%] block float-left ">
                <a className="mx-auto static inline-block w-auto flex-col">
                  <div className="relative h-full rotate-2 ">
                    <div className="absolute left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid border-[2px] border-[#ffd779] rounded-[25px] object-fill"></div>
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/62aada7e54e36077807201e6_300%20x%20300%20stablecoins%20blog-p-500.jpeg"
                      className="overflow-hidden w-[100%] h-[100%] rounded-[25px] object-cover align-middle "
                    ></img>
                  </div>
                  <h4 className="mt-[20px] mb-[10px] font-head text-[25px] text-[#000] leading-[30px] tracking-[-0.025em] ">
                    Not All Stablecoins Are Created Equal
                  </h4>
                  <div className="font-head text-[#00000080] text-[16px] leading-[26px] font-[400] ">
                    I would love to share my two stable cents on how I analyze
                    stablecoins when coming across them.
                  </div>
                </a>
              </div>
              <div className="w-[22%] mr-[0.5%] ml-[0.5%] block float-left ">
                <a className="mx-auto static inline-block w-auto flex-col">
                  <div className="relative h-full rotate-2 ">
                    <div className="absolute left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid border-[2px] border-[#ffd779] rounded-[25px] object-fill"></div>
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/62aae1c91ec2b9d552139c5a_300%20x%20300%20my%20next%20step-p-500.jpeg"
                      className="overflow-hidden w-[100%] h-[100%] rounded-[25px] object-cover align-middle "
                    ></img>
                  </div>
                  <h4 className="mt-[20px] mb-[10px] font-head text-[25px] text-[#000] leading-[30px] tracking-[-0.025em] ">
                    My Next Step
                  </h4>
                  <div className="font-head text-[#00000080] text-[16px] leading-[26px] font-[400] ">
                    Tomer Bariach joins Flori Ventures as General Partner.
                  </div>
                </a>
              </div>
              <div className="w-[22%] mr-[0.5%] ml-[0.5%] block float-left ">
                <a className="mx-auto static inline-block w-auto flex-col">
                  <div className="relative h-full rotate-2 ">
                    <div className="absolute left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid border-[2px] border-[#ffd779] rounded-[25px] object-fill"></div>
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/62aae4b73cdfca02764f037a_300%20x%20300%20hello%20world-p-500.jpeg"
                      className="overflow-hidden w-[100%] h-[100%] rounded-[25px] object-cover align-middle "
                    ></img>
                  </div>
                  <h4 className="mt-[20px] mb-[10px] font-head text-[25px] text-[#000] leading-[30px] tracking-[-0.025em] ">
                    Hello World
                  </h4>
                  <div className="font-head text-[#00000080] text-[16px] leading-[26px] font-[400] ">
                    Maria Alegre, Flori Managing Partner, introduces Flori
                    Ventures.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[60px] relative px-[3%] bg-[#f5f1ee] mx-[15px] pb-[40px] ">
          <div className="text-center w-full max-w-[900px] mr-auto ml-auto  ">
            <div className="flex mb-[40px] items-end flex=-row">
              <h2 className="font-main leading-[56px] font-[300] text-[36px] ">
                <strong className="text-[#f27e6c]">Rethink</strong> what you can
                do with
              </h2>
              <div className="ml-[10px] font-main leading-[60px] font-[900] text-[42px]">
                web3
              </div>
            </div>
            <div className="px-[20px] relative z-[2] block mb-[60px] py-[20px] border-solid border-[1px] border-[#4444] rounded-[25px] ">
              <div className="z-[-1] absolute border-[2px] border-[#fec2b2] rotate-2 left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid rounded-[25px] obkect-fill "></div>
              <div className="flex items-center mx-[0]  ">
                <div className="text-center py-[2%] px-[3%] relative float-left min-h-[1px] ">
                  <img
                    src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a96d744efbf49bd1391e8a_flower16%201.png"
                    className="max-h-[120px] mx-auto "
                  ></img>
                </div>
                <div className="w-full left-auto right-auto relative flex-1 rotate-0 px-[10px]">
                  <h4 className="border-none border-[1px] opacity-[0.3] font-head text-start text-[24px] leading-[38px] my-[10px] font-[400]">
                    no.1
                  </h4>
                  <h3 className="font-sign text-[56px] text-start leading-[46px] tracking-normal font-[400]">
                    connect
                  </h3>
                  <p className="text-start text-[22px] leading-[36px] tracking-normal relative text-[#1e1e1e] font-[300] mt-[3px] font-head ">
                    Building on Celo or thinking about it? Believe your values
                    align with Flori’s? We’d love to hear from you and learn
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px] relative z-[2] block mb-[60px] py-[20px] border-solid border-[1px] border-[#4444] rounded-[25px] ">
              <div className="z-[-1] absolute border-[2px] border-[#ffd779] rotate-2 left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid rounded-[25px] obkect-fill "></div>
              <div className="flex items-center mx-[0]  ">
                <div className="text-center py-[2%] px-[3%] relative float-left min-h-[1px] ">
                  <img
                    src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a96f5fe07361e352e11d78_flower14%201.png"
                    className="max-h-[120px] mx-auto "
                  ></img>
                </div>
                <div className="w-full left-auto right-auto relative flex-1 rotate-0 px-[10px]">
                  <h4 className="border-none border-[1px] opacity-[0.3] font-head text-start text-[24px] leading-[38px] my-[10px] font-[400]">
                    no.2
                  </h4>
                  <h3 className="font-sign text-[56px] text-start leading-[46px] tracking-normal font-[400]">
                    collaborate
                  </h3>
                  <p className="text-start text-[22px] leading-[36px] tracking-normal relative text-[#1e1e1e] font-[300] mt-[3px] font-head ">
                    The Flori community is a place for collaboration amongst
                    founders, connecting needs to solutions and creating a
                    meaningful support system. We believe we can get farther
                    together.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px] relative z-[2] block mb-[60px] py-[20px] border-solid border-[1px] border-[#4444] rounded-[25px] ">
              <div className="z-[-1] absolute border-[2px] border-[#97e0fd] rotate-2 left-[0%] right-[0%] top-[0%] bottom-[0%] overflow-visible border-solid rounded-[25px] obkect-fill "></div>
              <div className="flex items-center mx-[0]  ">
                <div className="text-center py-[2%] px-[3%] relative float-left min-h-[1px] ">
                  <img
                    src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a96fdb7627efbeaf6a458e_flower6B%201.png"
                    className="max-h-[120px] mx-auto "
                  ></img>
                </div>
                <div className="w-full left-auto right-auto relative flex-1 rotate-0 px-[10px]">
                  <h4 className="border-none border-[1px] opacity-[0.3] font-head text-start text-[24px] leading-[38px] my-[10px] font-[400]">
                    no.3
                  </h4>
                  <h3 className="font-sign text-[56px] text-start leading-[46px] tracking-normal font-[400]">
                    scale
                  </h3>
                  <p className="text-start text-[22px] leading-[36px] tracking-normal relative text-[#1e1e1e] font-[300] mt-[3px] font-head ">
                    Whether fundraising or launching products, at Flori you’ll
                    find peer support, tools, and resources to help you thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] py-[60px] mx-[15px] px-[3%]">
          <div className="py-[60px] relative flex overflow-hidden flex-row justify-center box-border text-center w-[100%] max-w-[900px] mr-auto ml-auto">
            <div className="w-full left-auto right-auto relative float-left px-[10px] ">
              <div className="absolute left-[0%] top-[0%] bottom-[0%] right-[0%] h-full overflow-visible border-solid border-width-2px border-[#ffd779] object-fill rotate-2"></div>
              <img
                src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a9715560972e3d19a2f06b_flori-featured-startup-p-500.png"
                className="overflow-hidden rounded-[25px] object-cover"
              ></img>
              <div className="mx-0">
                <div className="px-0 left-auto right-auto relative float-left ">
                  <img
                    src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a9718c30501abfc89e7cee_200%2B.png"
                    className="overflow-hidden w-[50%] mt-[20px] rounded-[25px] align-middle"
                  ></img>
                </div>
                <div className="flex justify-end ">
                  <img
                    src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a972858b4f233fcebccc79_texture-2.png"
                    className="mt-[-50px] max-w-[250px] align-middle  "
                  ></img>
                </div>
              </div>
            </div>
            <div className=""></div>
            <div className="pl-[5%] w-full left-auto right-auto relative float-left pr-[10px] box-border">
              <h2 className="mb-[40px] font-head text-[22px] font-[300] tracking-[4px] uppercase mt-[20px] leading-[50px]">
                We believe in the <br></br>
                <strong className="mt-[-10px] mb-[10px] font-main text-[52px] tracking-[normal] font-bold lowercase text-[black]">
                  power of many.
                </strong>
                <br></br>
              </h2>

              <div className="text-left text-[22px] leading-[36px] relative font-head text-[#1e1e1e] font-[300] tracking-normal ">
                We back founders and leaders who tap into financial innovation
                to solve real-world problems at scale.
                <br></br>
              </div>
              <div className="box-border grid grid-cols-3 gap-4 mt-[20px]">
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fc5b8580d6746cff1398_Cent%20Finance.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fc3fd5eb4d6108dee0d1_Ambisafe-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fcd1c9e23d45ae8c61a0_Tradegen-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fc9516d7e662efcf4878_Moola-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fcb716d7e608facf4b2d_Resource%20Network.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fcaf17b4429e27a024ca_Releaf-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fcdb8940c7db0c0d8364_Ubeswap-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fc6b16d7e657d9cf4863_Cryptohunt-p-500.png"
                      className=""
                    ></img>
                  </a>
                </div>
                <div className="static inline-block width-[30%] mb-[40px] flex-row flex-wrap items-start  ">
                  <a className="h-[60px] w-auto overflow-visible flex max-h-[80px] flex-row justify-center items-strech bg-transparent ">
                    <img
                      src="https://uploads-ssl.webflow.com/61a51fbcc47c6d359c3e84c6/61b7fca65507dac85b53d849_Ponto.png"
                      className=""
                    ></img>
                  </a>
                </div>
              </div>
              <a
                href="/"
                className="mt-[40px] mr-auto ml-auto relative inline-block h-auto font-main text-[#444] text-[22px] border-[0.5px] border-[#f27e6c] rounded-[50px]"
              >
                <div className="border-[0.5px] border-[#f27e6c] rounded-[50px] rotate-4 duration-300 border-solid text-center text-[#444] box-border text-2xl px-[20px] pt-[10px] pb-[15px] ">
                  see more
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-0 bg-[#fff] py-[40px] px-[3%] ">
          <div className="flex py-[20px] flex-col justify-center items-center ">
            <a className="max-w-full inline-block bg-transparent ">
              <img
                src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a5fb6a476680115acebea5_Flori-logo.png"
                className="max-w-[90px] ml-[-10px] align-middle "
              ></img>
            </a>
            <div className="mt-[30px] flex justify-start grid-rows-[auto] gap-4">
              <a>
                <img
                  src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a977e3558712d55b2dfed0_LinkedIn.svg"
                  className="hover:bg-[url('https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61afee6e60f891c45973079b_LinkedIn-gradient.png)]"
                ></img>
              </a>
              <a>
                <img
                  src="https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61a977fc1c869745a34238c1_Twitter.svg"
                  className="hover:bg-[url('https://uploads-ssl.webflow.com/61a51fbcc47c6d57383e84ae/61afee6e60f891c45973079b_LinkedIn-gradient.png)]"
                ></img>
              </a>
            </div>
            <div className="mt-[30px] flex justify-start grid-rows-[auto] gap-4">
              <a className="text-[16px] leading-[28px] font-[200] font-head  ">
                Privacy Policy
              </a>
              <a className="text-[16px] leading-[28px] font-[200] font-head  ">
                Terms of use
              </a>
            </div>
            <div className="text-[14px] leading-[27px] tracking-[3px] mt-[10px] font-head uppercase">
              ©2022 FLORI VENTURES. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
