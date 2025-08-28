"use client"

const StatusDot = () => {
    return (
        <div className="flex gap-2 items-center justify-between">
            <div aria-label="success" className="status status-md status-success"></div>
            <div aria-label="warning" className="status status-lg status-warning"></div>
            <div aria-label="error" className="status status-xl status-error"></div>
        </div>
    );
};

export default StatusDot;
