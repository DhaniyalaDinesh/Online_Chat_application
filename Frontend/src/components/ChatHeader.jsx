import { Phone, Video, X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        {/* Left: Avatar + Name + Status */}
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Right: Call buttons + Close */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost text-zinc-500 hover:text-primary"
            title="Audio Call"
            onClick={() => console.log("Start audio call")}
          >
            <Phone size={18} />
          </button>

          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost text-zinc-500 hover:text-primary"
            title="Video Call"
            onClick={() => console.log("Start video call")}
          >
            <Video size={18} />
          </button>

          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost text-zinc-500 hover:text-red-500"
            title="Close"
            onClick={() => setSelectedUser(null)}
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
