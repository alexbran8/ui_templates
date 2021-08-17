import React from "react";

export const SidebarData = [
  {
    title: "Students",
    path: "/students",
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Projects",
        path: "/about-us/aim",
        // icon: <IoIcons.IoIosPaper />,
      },
      // {
      //   title: "Our Vision",
      //   path: "/about-us/vision",
      //   // icon: <IoIcons.IoIosPaper />,
      // },
    ],
  },
  {
    title: "Admin",
    path: "/admin/items",
    // icon: <IoIcons.IoMdHelpCircle />,
    subNav: [
      {
        title: "Service 1",
        path: "/services/services1",
        // icon: <IoIcons.IoIosPaper />,c
        cName: "sub-nav",
      },
      {
        title: "Service 2",
        path: "/services/services2",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 3",
        path: "/services/services3",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    // icon: <IoIcons.IoIosPaper />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Events",
    path: "/events",
    // icon: <FaIcons.FaEnvelopeOpenText />,

    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    // icon: <IoIcons.IoMdHelpCircle />,
  },
 
  {
    title: "Contact",
    path: "/contact",
    // icon: <FaIcons.FaPhone />,
  },
];