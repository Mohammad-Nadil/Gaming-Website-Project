import React, { useState } from "react";
import Container from "../layer/Container";
import CustomBtn from "../layer/CustomBtn";
import line from "../../assets/lineHorizontal.png";
import img from "../../assets/articleExample.png";
import { PiClockCountdownFill } from "react-icons/pi";
import game from "../../games";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const BlogDetail = () => {
  let tags = [
    "Fantasy",
    "Open World",
    "Survival",
    "Indie",
    "Arcade",
    "Platformer",
    "Simulation",
  ];

  return (
    <div className="">
      <Container className="py-10 md:py-16 xl:py-20 flex 2xl:gap-x-10">
        <div className=" w-full lg:w-2/3 text-white font-openSans sm:text-xl lg:text-2xl flex flex-col gap-y-6  md:gap-y-10 xl:gap-y-20">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
          <img src={line} alt={line} />
          <div className="main flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-10 md:gap-y-20">
              <div className="title flex flex-col gap-y-3 md:gap-y-9">
                <h2 className=" text-xl sm:text-3xl md:text-5xl font-medium">
                  Introducing Reader. A Stunning Experience
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
              </div>
              <img className="w-full !aspect-[10/6]" src={img} alt={img} />
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
          <div className="author flex gap-x-3 sm:gap-x-5 md:gap-x-10">
            <div className="name w-1/3 flex flex-col gap-y-2.5 md:gap-y-5 rounded-lg md:rounded-3xl bg-secondary-bg p-2 sm:p-3 md:p-9">
              <h2 className=" text-sm sm:text-xl md:text-3xl">Author :</h2>
              <div className="flex items-center gap-x-2 md:gap-x-4 text-base md:text-2xl">
                <FaUserCircle />
                <p className="text-xs sm:text-xl md:text-2xl">Username</p>
              </div>
            </div>
            <div className="socialLinks w-2/3 flex flex-col gap-y-2.5 md:gap-y-5 rounded-lg md:rounded-3xl bg-secondary-bg p-2 sm:p-3 md:p-9">
              <p className=" text-sm sm:text-xl md:text-3xl">
                Share This Article :
              </p>
              <div className="icons flex gap-x-3">
                {[
                  <FaFacebookF />,
                  <IoMdMail />,
                  <FaTwitter />,
                  <FaLinkedinIn />,
                ].map((item, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-full bg-gradient-to-tr from-Gr-start to-Gr-end w-7 text-sm md:text-base md:w-12 grid place-content-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tags bg-secondary-bg rounded-lg md:rounded-3xl py-3  px-3  lg:hidden flex flex-col gap-y-4">
            <h2 className="text-3xl text-white font-openSans">
              Browse by Tags
            </h2>
            <div className="tag flex flex-wrap items-center gap-x-1.5 gap-y-1.5 ">
              {tags.map((tag, index) => (
                <div key={index} className="">
                  <p className="py-2 px-3 text-sm text-white font-openSans bg-primary-bg rounded-lg">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="recommend bg-gradient-to-b from-Gr-start to-Gr-end p-0.5 rounded-2xl">
            <div className=" h-full w-full bg-secondary-bg rounded-2xl p-3 md:p-5 xl:p-11 flex flex-col gap-y-7 xl:gap-y-11">
              <div className="head text-xl lg:text-3xl flex items-center gap-x-4">
                <p className="text-nowrap">Recommended Articles</p>
                <img
                  className=" hidden 2xl:block w-full"
                  src={line}
                  alt={line}
                />
              </div>
              <div className="body grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 md:gap-y-7 xl:gap-y-14">
                {game
                  .filter((_, i) => i < 6)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="card flex items-center gap-x-5 "
                    >
                      <div className="head w-1/3 xl:w-1/4 aspect-square">
                        <div className="img aspect-square">
                          <img
                            className="h-full w-full object-cover"
                            src={item.thumbnail}
                            alt="pics"
                          />
                        </div>
                      </div>
                      <div className="body w-2/3 xl:w-3/4 flex flex-col gap-y-3">
                        <div className="title text-Gr-end text-lg xl:text-2xl">
                          <p>Post title article title name article blog</p>
                        </div>
                        <div className="duration text-primary text-base xl:text-xl flex items-center gap-x-3">
                          <PiClockCountdownFill className="text-2xl" />
                          <p> 3 min read </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="comment bg-secondary-bg rounded-lg md:rounded-3xl py-3 md:py-6 xl:py-12 px-3 md:px-7 xl:px-14 flex flex-col gap-y-5 md:gap-y-10">
            <div className="head text-xl lg:text-4xl">
              <p>Article Comments</p>
            </div>
            <div className="main">
              <div className="form flex flex-col gap-y-5 md:gap-y-14">
                <div className="inputs flex gap-x-4">
                  <div className="name relative py-1 md:py-4 px-2 md:px-5 bg-primary-bg group w-full rounded-lg md:rounded-2xl">
                    <input
                      type="text"
                      id="name"
                      className="peer w-full bg-primary-bg outline-none rounded-lg p-2 pt-5 text-white"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-Gr-start transition-all"
                    >
                      Name:
                    </label>
                  </div>
                  <div className="email relative py-1 md:py-4 px-2 md:px-5 bg-primary-bg group w-full rounded-lg md:rounded-2xl">
                    <input
                      type="text"
                      id="email"
                      className="peer w-full bg-primary-bg outline-none rounded-lg p-2 pt-5 text-white"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-Gr-start transition-all"
                    >
                      Email :
                    </label>
                  </div>
                </div>
                <div className="comment relative py-1 md:py-4 px-2 md:px-5 bg-primary-bg group w-full rounded-lg md:rounded-2xl">
                  <textarea
                    name="comment"
                    id="comment"
                    className="peer w-full bg-primary-bg outline-none rounded-lg p-2 text-white resize-none"
                    required
                    rows="5"
                  ></textarea>
                  <label
                    htmlFor="comment"
                    className="absolute left-5 top-4 text-gray-400 peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-Gr-start transition-all"
                  >
                    Comment:
                  </label>
                </div>
                <div className="btn">
                  <CustomBtn text="Publish" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-0 lg:w-1/3">
          <div className="tags bg-secondary-bg rounded-lg md:rounded-3xl py-6 2xl:py-9 md:px-7 2xl:px-10 hidden lg:flex flex-col gap-y-6">
            <h2 className="text-3xl text-white font-openSans">
              Browse by Tags
            </h2>
            <div className="tag flex flex-wrap items-center gap-x-4 gap-y-6 ">
              {tags.map((tag, index) => (
                <div key={index} className="">
                  <p className="py-3 px-6 xl:text-xl text-white font-openSans bg-primary-bg rounded-lg">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetail;
