import CMS from "netlify-cms";
import PagePreview from "../js/cms/page-preview";
import OneStopPreview from "../js/cms/onestop-preview";
import FacultyPreview from "../js/cms/faculty-preview";
import LinksControl from "../js/cms/list-widget";


CMS.registerWidget("links", LinksControl)
CMS.registerPreviewStyle("../css/main.css");
CMS.registerPreviewStyle("../css/interior.css");
CMS.registerPreviewStyle("../css/onestop.css");
CMS.registerPreviewStyle("../css/faculty.css");
CMS.registerPreviewTemplate("page", PagePreview);
CMS.registerPreviewTemplate("onestop", OneStopPreview);
CMS.registerPreviewTemplate("faculty", FacultyPreview);