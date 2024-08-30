import {interviewingPath, mentorshipPath, referralsPath} from "@/globals/Routes";

export const appName = 'Quify';

export const appTagline = 'Unlock your Career Potential';

export const webClientUrl = 'https://quify.vercel.app';

export const typewritingTexts = ['Get Job Referrals', 'Ace Mock Interviews', 'Find Your Mentor'];

export const services = [
    {
        'icon': '',
        'label': 'Interviewing',
        'description': 'Get interviewed by experienced interviewers',
        'route': interviewingPath,
    },
    {
        'icon': '',
        'label': 'Easy Referrals',
        'description': 'Get referred to your dream company',
        'route': referralsPath,
    },
    {
        'icon': '',
        'label': 'Mentorship',
        'description': 'Get an experienced professional as your career mentor',
        'route': mentorshipPath,
    },
];


export const NEXT_PUBLIC_USER_POOL_ID = 'us-east-1_fJBw6qNIa';
export const NEXT_PUBLIC_USER_POOL_CLIENT_ID='2ruubptkoq6c2t5nhcaqeji8vr';
