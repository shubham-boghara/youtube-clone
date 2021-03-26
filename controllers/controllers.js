//video-controller
export const home = (req,res) => res.send("Home");
export const search = (req,res) => res.send("search");
export const videos = (req,res) => res.send("videos");
export const upload = (req,res) => res.send("upload");
export const videoDetail = (req,res) => res.send("videoDetail");
export const editVideo = (req,res) => res.send("editVideo");
export const deleteVideo = (req,res) => res.send("deleteVideo");

//user-controller
export const join = (req,res) => res.send("join");
export const login = (req,res) => res.send("login");
export const logout = (req,res) => res.send("logout");
export const users = (req,res) => res.send("users");
export const userDetail = (req,res) => res.send("userDetails");
export const editProfile = (req,res) => res.send("editProfile");
export const changePassword = (req,res) => res.send("changePassword");

