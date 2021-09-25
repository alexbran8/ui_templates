export const SidebarData = [
  {
    title: "Students",
    path: "#",
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
    path: "#",
    restriction: 'admin',
    // icon: <IoIcons.IoMdHelpCircle />,
    subNav: [
      {
        title: "Database",
        path: "/admin/database",
        restriction: 'admin2',
        // icon: <IoIcons.IoIosPaper />,c
        cName: "sub-nav",
      },
      {
        title: "Service 2",
        path: "/services/services2",
        restriction: 'admin',
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Service 3",
        path: "/services/services3",
        restriction: 'admin',
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Projects",
    path: "#",
    restriction: 'admin',
    subNav: [
      {
        title: "List",
        restriction: 'admin',
        path: "/projects/list",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Attendace",
        restriction: 'admin',
        path: "/events/attendance",
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
