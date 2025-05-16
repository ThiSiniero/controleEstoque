import React from 'react';

const ConfirmSend = () => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg min-w-[300px] shadow-lg text-center">
                <p className="mb-6 text-lg">Are you sure you want to send?</p>
                <div className="flex justify-center gap-4">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        onClick={() => { handleClose(); /* Add your send logic here */ }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSend;
