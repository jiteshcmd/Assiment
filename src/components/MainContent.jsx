import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stepper } from "react-form-stepper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { IoIosStar } from "react-icons/io";
import { Progress } from "@/components/ui/progress";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const MainContent = () => {
  return (
    <div className="w-full">
      <div class="grid grid-rows-4 grid-cols-[15%_83%] gap-4">
        <div class="bg-white p-2">
          <div className="p-3">
            <div className="flex p-2">
              <MdDashboard className="mt-1 mr-2" size={20} />
              Dashboard
            </div>
            <div className="p-2 bg-blue-50 rounded-md">
              <div className="flex text-[#0084CA] items-center font-normal">
                <HiOutlineBuildingOffice2
                  className="mr-2 text-[#0084CA]"
                  size={20}
                />
                Job Notification
              </div>
            </div>
          </div>
        </div>
        <div class="p-4">
          <Card>
            <CardContent>
              <Tabs
                defaultValue="account"
                // className="min-w-[400px] max-w-[590px]"
              >
                <TabsList className="Top-tab">
                  <div className="flex gap-5">
                    <TabsTrigger
                      value="basic"
                      className="bg-transparent text-blue-300 data-[state=active]:text-blue-500 px-4 py-2"
                    >
                      Basic Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="contact"
                      className="bg-transparent text-blue-300 data-[state=active]:text-blue-500 px-4 py-2"
                    >
                      Contact Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="academic"
                      className="bg-transparent text-blue-300 data-[state=active]:text-blue-500 px-4 py-2"
                    >
                      Academic Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="account"
                      className={clsx(
                        "bg-transparent text-blue-300 data-[state=active]:text-blue-500 px-4 py-2",
                        "data-[state=active]:border-b-2 data-[state=active]:border-b-blue-500 data-[state=active]:border-x-0 data-[state=active]:border-t-0 rounded-none  "
                      )}
                    >
                      Interview Round & Ratings
                    </TabsTrigger>
                  </div>
                </TabsList>
                <TabsContent value="account" className="tab-content">
                  <hr className="border-top" />
                  <div className="">
                    <Stepper
                      steps={[
                        { label: "Interview Round 1" },
                        { label: "Interview Round 2" },
                        { label: "Interview Round 3" },
                        { label: "Interview Round 4" },
                      ]}
                      activeStep={1}
                      className=" [&_.step-indicator]:w-8 [&_.step-indicator]:h-8 [&_.step-indicator]:rounded-md"
                    />
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <div className="flex justify-between">
                            <div>
                              <h2 className="f-color text-2xl font-medium">
                                Inverview Round 1
                              </h2>
                            </div>
                            <div>
                              <Button className="w-28 bg-[#c9c9c8] text-gray-500 hover:bg-[#c9c9c8] mb-5">
                                Completed{" "}
                                <MdOutlineKeyboardArrowDown size={30} />
                              </Button>
                            </div>
                          </div>
                        </CardTitle>
                        <hr className="border-bottom mt-5" />
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between">
                          <div>
                            <img
                              src="/images/image1.png"
                              alt="Description"
                              className="w-full h-auto"
                            />
                          </div>
                          <div>
                            <img
                              src="/images/image2.png"
                              alt="Description"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                        <hr className="border-bottom mt-5 mb-5" />
                        <h2 className="f-color text-xl font-medium">
                          Overall Ratings
                        </h2>
                        <div className="flex items-center mt-5 gap-2">
                          <h1 className="text-6xl font-medium">2/5</h1>
                          <div className="flex items-center gap-1">
                            <IoIosStar className="text-[#FFA42C]" size={30} />
                            <IoIosStar className="text-[#FFA42C]" size={30} />
                            <IoIosStar className="text-gray-500" size={30} />
                            <IoIosStar className="text-gray-500" size={30} />
                            <IoIosStar className="text-gray-500" size={30} />
                          </div>
                          <div>
                            <h1 className="text-lg font-medium">Poor+</h1>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h1 className="text-base font-medium text-gray-400">
                            Based on all the Categories
                          </h1>
                        </div>
                        <div>
                          <div className="flex justify-between w-full mt-4">
                            <div className="flex items-center w-full">
                              <h2>Skill and Qualifications</h2>
                              <Progress
                                value={33}
                                className="w-[77%] ml-6 mt-1 bg-gray-200 [&>div]:bg-[#FFA42C]"
                              />
                            </div>
                            <div>
                              <h2 className="text-base font-medium text-gray-400">
                                2/5
                              </h2>
                            </div>
                          </div>
                          <div className="flex justify-between w-full mt-4">
                            <div className="flex items-center w-full">
                              <h2>Cultural Fit</h2>
                              <Progress
                                value={33}
                                className="w-[86%] ml-6 mt-1 bg-gray-200 [&>div]:bg-[#FFA42C]"
                              />
                            </div>
                            <div>
                              <h2 className="text-base font-medium text-gray-400">
                                2/5
                              </h2>
                            </div>
                          </div>
                          <div className="flex justify-between w-full mt-4">
                            <div className="flex items-center w-full">
                              <h2>Problem-solving and Critical Thinking</h2>
                              <Progress
                                value={33}
                                className="w-[66%] ml-6 mt-1 bg-gray-200 [&>div]:bg-[#FFA42C]"
                              />
                            </div>
                            <div>
                              <h2 className="text-base font-medium text-gray-400">
                                2/5
                              </h2>
                            </div>
                          </div>
                          <div className="flex justify-between w-full mt-4">
                            <div className="flex items-center w-full">
                              <h2>Communication and Interpersonal Skills</h2>
                              <Progress
                                value={33}
                                className="w-[64%] ml-6 mt-1 bg-gray-200 [&>div]:bg-[#FFA42C]"
                              />
                            </div>
                            <div>
                              <h2 className="text-base font-medium text-gray-400">
                                2/5
                              </h2>
                            </div>
                          </div>
                        </div>
                        <hr className="border-bottom mt-5 mb-5" />
                        <div>
                          <div className="flex justify-between">
                            <h2 className="f-color text-xl font-medium">
                              Categories Wise Ratings
                            </h2>
                            <Button className="w-28 bg-[#FFA42C] text-white hover:bg-[#FFA42C]">
                              Edit
                            </Button>
                          </div>
                          <div className="flex justify-between mt-4">
                            <h1 className="text-xl font-medium text-gray-400">
                              Smit Panchal’s Ratings
                            </h1>
                            <IoIosArrowUp color="gray" size={35} />
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <div className="w-full mt-4">
                                <h1 className="text-base font-normal">
                                  Skills and Qualifications
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mt-4">
                                <h1 className="text-base font-normal">
                                  Cultural Fit
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <div className="w-full mt-5">
                                <h1 className="text-base font-normal">
                                  Problem-solving and Critical Thinking
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mt-5">
                                <h1 className="text-base font-normal">
                                  Communication and Interpersonal Skills
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-8">
                            <h1 className="text-xl font-medium text-gray-400">
                              Devarsh Patel’s Ratings
                            </h1>
                            <IoIosArrowUp color="gray" size={35} />
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <div className="w-full mt-4">
                                <h1 className="text-base font-normal">
                                  Skills and Qualifications
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mt-5">
                                <h1 className="text-base font-normal">
                                  Cultural Fit
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10">
                            <div className="flex justify-between">
                              <div className="w-full mt-5">
                                <h1 className="text-base font-normal">
                                  Problem-solving and Critical Thinking
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full mt-5">
                                <h1 className="text-base font-normal">
                                  Communication and Interpersonal Skills
                                </h1>
                                <div className="flex mt-3">
                                  <div className="flex items-center gap-1">
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-[#FFA42C]"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                    <IoIosStar
                                      className="text-gray-500"
                                      size={30}
                                    />
                                  </div>
                                  <div>
                                    <h1 className="text-lg font-medium ml-4">
                                      Poor+
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
              <hr className="border-top mt-10" />
              <div className="flex justify-end mt-8">
                <Button className="w-28 bg-[#F2F6F9] text-blue-600 hover:bg-[#FFA42C] hover:text-white">
                  Back
                </Button>
                <Button className="w-28 bg-[#0084CA] text-white hover:bg-[#006BA1] ml-5">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
