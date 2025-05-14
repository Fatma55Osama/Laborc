import { atom } from "recoil";
import reaserch from "../assets/solution-bottom-icon1.svg";
import flower from "../assets/solution-bottom-icon2.svg";
import books from "../assets/solution-bottom-icon3.svg";
import { create } from "zustand";
import { PiTicketFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
export const $active = atom({
  key: " $active",
  default: "Home",
});
export const $isplay = atom({
  key: "$isplay",
  default: false,
});
export const $blocks = atom({
  key: "$blocks",
  default: [
    {
      img: reaserch,
      title: "Initial Consultation",
      pargraph:
        "We begin with an in-depth consultation to understand your specific needs and objectives.",
    },
    {
      img: flower,
      title: "Customized Testing Plan",
      pargraph:
        "Based on your requirements, we develop a customized testing plan tailored to your materials.",
    },
    {
      img: books,
      title: "Consultation & Support",
      pargraph:
        "e offer follow-up consultations to review the results and discuss anyfurther steps.",
    },
  ],
});
export const $domain = atom({
  key: "$domain",
  default: "http://localhost:1337",
});

export const useData = create((set) => ({
  dataBlog: [],
  dataTeams: [],
  DetailsBlog: {},
  dataservice: [],
  detailsServie: {},
  setDetailServices: (value) => set(() => ({ detailsServie: value })),
  setDataBlog: (blogs) => set(() => ({ dataBlog: blogs })),
  setTeams: (teams) => set(() => ({ dataTeams: teams })),
  setDetalisblogs: (singlblog) => set(() => ({ DetailsBlog: singlblog })),
  setService: (service) => set(() => ({ dataservice: service })),
}));
export const usepagination = create((set) => ({
  currentpage: 1,
  setCurrentpage: (value) => set(() => ({ currentpage: value })),
  totalPages: 1,
  setTotalPages: (value) => set(() => ({ totalPages: value })),
  blogsperpage: 3,
  setblogsperpage: (value) => set(() => ({ blogsperpage: value })),
}));

export const useResearch = create((set) => ({
  research: [],
  setresearch: (resea) => set(() => ({ research: resea })),
  Detailsreaserch: {},
  setDetailsreaserch: (value) => set(() => ({ Detailsreaserch: value })),
}));
export const useLoading = create((set) => ({
  loaderindex: true,
  setLoderindex: (value) => set(() => ({ loaderindex: value })),
}));
export const usepathDash = create((set) => ({
  pathdash: [
    { name: "Dashboard", path: "/Dashboard", icon: RxDashboard },
    { name: "Booking", path: "/Dashboard/rebooking", icon: PiTicketFill },
    { name: "Profile", path: "/Dashboard/Profile", icon: CgProfile },
  ],
  setPath: (value) => set(() => ({ pathdash: value })),
}));

export const useModale = create((set) => ({
  modalindex: false,
  openModal: () => set(() => ({ modalindex: true })),
  closeModal: () => set(() => ({ modalindex: false })),
}));
