import axiosInstance from "@/config/axios.config";

const login = async (
  url: string,
  data: { email: string; password: string }
) => {
  console.log(data);

  const res = await axiosInstance.post(url, {data}, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

const AuthServices = {
  login,
};

export default AuthServices;
