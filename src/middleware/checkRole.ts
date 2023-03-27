export const checkRole = async (req, res, next) => {
    let check = req["decoded"].role
    if (check === "admin") {
        next()
    } else {
        res.status(403).json({
            message: 'Bạn Không Có Quyền'
        })
    }
}