import Api from "./api";

const CourseService = {

  fetchCourses: async function() {
    try {
      const response = await Api.get("/course");
      return response.data;
    } catch (error) {
      return error;
    }
  },

  fetchCategories: async function() {
    try {
      const response = await Api.get("/category");
      return response.data;
    } catch (error) {
      return error;
    }
  },

  fetchPlans: async function() {
    try {
      const response = await Api.get("/plan");
      return response.data;
    } catch (error) {
      return error;
    }
    
  },
  fetchPlansCourses: async function(id = "") {
    try {
      const response = await Api.get("/plancourses/"+id);
      return response.data.length;
    } catch (error) {
      return error;
    }
    
  }
}

export default CourseService;