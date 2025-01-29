// components/ApplicantCard.tsx
import React from "react";

type Applicant = {
  _id: string;
  _type: "applicant";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  email?: string;
  internshiprefrence?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
  };
  phonenumber?: string;
};

interface ApplicantCardProps {
  applicant: Applicant;
}

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric", // "numeric" or "2-digit"
      month: "short",   // "long", "short", or "2-digit"
      day: "numeric",   // "numeric" or "2-digit"
    };
  
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
const ApplicantCard: React.FC<ApplicantCardProps> = ({ applicant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-start space-y-4">
        {/* Applicant Title */}
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {applicant.title || "Untitled"}
        </h3>

        {/* Applicant Email */}
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Email:</span> {applicant.email || "Not provided"}
        </p>

        {/* Applicant Phone Number */}
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Phone:</span> {applicant.phonenumber || "Not provided"}
        </p>

        {/* Internship Reference */}
        <div className="mt-4 flex items-center space-x-2 text-gray-700">
          <span className="font-medium">Internship Ref:</span>
          <a
            href={`/internship/${applicant.internshiprefrence?._ref || "#"}`}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            {applicant.internshiprefrence ? "View Reference" : "Not available"}
          </a>
        </div>

        {/* Applicant ID */}
        <p className="text-gray-400 text-xs mt-4">ID: {applicant._id}</p>

        {/* Created At */}
        <p className="text-gray-400 text-xs">Created on: {formatDate(applicant._createdAt)}</p>

        {/* Updated At */}
        <p className="text-gray-400 text-xs">Last updated: {formatDate(applicant._updatedAt)}</p>
      </div>
    </div>
  );
};

export default ApplicantCard;
