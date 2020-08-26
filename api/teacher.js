import request from "@/utils/request";
const api_name = "/eduservice/teacherfront";
export default {
  getPageList(page, limit) {
    return request({
      url: `${api_name}/getTeacherFrontList/${page}/${limit}`,
      method: "get"
    });
  },
  getTeacherInfo(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: "get"
    });
  }
};
