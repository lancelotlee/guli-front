import request from "@/utils/request";
const api_name = "/eduservice/coursefront";
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/getCourseFrontList/${page}/${limit}`,
      method: "post",
      data: searchObj
    });
  },
  getAllSubject() {
    return request({
      url: `/eduservice/edu-subject/getAllSubject`,
      method: "get"
    });
  },
  getById(courseId) {
    return request({
      url: `${api_name}/getCourseFrontInfo/${courseId}`,
      method: "get"
    });
  }
};
