//video-controller
export const home = (req,res) => res.render("home",{pageTitle:"Home"});
export const search = (req,res) => res.render("search",{pageTitle:"search"});
export const videos = (req,res) => res.render("videos",{pageTitle:"videos"});
export const upload = (req,res) => res.render("upload",{pageTitle:"upload"});
export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle:"video-detail"});
export const editVideo = (req,res) => res.render("editVideo",{pageTitle:"edit-video"});
export const deleteVideo = (req,res) => res.render("deleteVideo",{pageTitle:"delete-video"});

//user-controller
export const join = (req,res) => res.render("join",{pageTitle:"join"});
export const login = (req,res) => res.render("login",{pageTitle:"login"});
export const logout = (req,res) => res.render("logout",{pageTitle:"logout"});
export const users = (req,res) => res.render("users",{pageTitle:"user"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"user-detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"edit-profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"change-password"});

