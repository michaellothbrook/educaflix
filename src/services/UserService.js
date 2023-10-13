import Api from "./api";

const UserService = {

  fetchStudents: async function() {
    try {
      const response = await Api.get("/student");
      return response.data;
    } catch (error) {
      return error;
    }
  },
}

export default UserService;