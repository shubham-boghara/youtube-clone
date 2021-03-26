//video-controller
export const home = (req,res) => res.render("home");
export const search = (req,res) => res.render("search");
export const videos = (req,res) => res.render("videos");
export const upload = (req,res) => res.render("upload");
export const videoDetail = (req,res) => res.render("videoDetail");
export const editVideo = (req,res) => res.render("editVideo");
export const deleteVideo = (req,res) => res.render("deleteVideo");

//user-controller
export const join = (req,res) => res.render("join");
export const login = (req,res) => res.render("login");
export const logout = (req,res) => res.render("logout");
export const users = (req,res) => res.render("users");
export const userDetail = (req,res) => res.render("userDetail");
export const editProfile = (req,res) => res.render("editProfile");
export const changePassword = (req,res) => res.render("changePassword");

