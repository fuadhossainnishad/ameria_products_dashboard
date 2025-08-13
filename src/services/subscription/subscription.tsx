import axiosInstance from "@/config/axios.config";

const getSubscription = async (
  url: string,
  data: { email: string; password: string }
) => {
  console.log(data);

  const res = await axiosInstance.post(
    url,
    { data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const updateSubscription = async (url: string, data: { price: number }) => {
  console.log(data);

  const res = await axiosInstance.post(
    url,
    { data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const SubscriptionServices = {
  getSubscription,
  updateSubscription,
};

export default SubscriptionServices;
