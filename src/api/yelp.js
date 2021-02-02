import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nJYi0ibaZVVv8Cyk-rYqk9glTlrUffTpouCvwZtmCR4WJ9mj4sdCnRVgsR-0HiRFCTMRl1xg-LGp2t7WpJ_nhkO_qwmqYiMsWOfTWcGDRZY4ywIAuWZneE6KF9qQX3Yx'
    }
})
