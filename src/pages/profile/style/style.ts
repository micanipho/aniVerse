import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    container: css`
        padding: 24px;
        min-height: 100%;
        max-width: 1200px;
        margin: 0 auto;
    `,

    /* Profile Header */
    profileHeader: css`
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 32px;
        margin-bottom: 40px;
        background: linear-gradient(135deg, #222831 0%, #2d333b 100%);
        border-radius: 16px;
        border: 1px solid #393e46;
    `,
    avatar: css`
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ADB5, #007f85);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: 700;
        flex-shrink: 0;
    `,
    userInfo: css`
        flex: 1;
    `,
    userName: css`
        color: #eeeeee;
        font-size: 1.6rem;
        font-weight: 700;
        margin: 0 0 4px 0;
    `,
    userHandle: css`
        color: #00ADB5;
        font-size: 1rem;
        margin: 0;
    `,
    stats: css`
        display: flex;
        gap: 24px;
    `,
    statItem: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 20px;
        background: rgba(0, 173, 181, 0.1);
        border-radius: 12px;
        border: 1px solid rgba(0, 173, 181, 0.2);
    `,
    statValue: css`
        color: #00ADB5;
        font-size: 1.5rem;
        font-weight: 700;
    `,
    statLabel: css`
        color: #aaa;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    `,

    /* Favorites Section */
    favoritesSection: css`
        margin-top: 16px;
    `,
    sectionTitle: css`
        color: #eeeeee;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        gap: 10px;
    `,
    heartIcon: css`
        color: #ff6b6b;
        font-size: 1.2rem;
    `,
    empty: css`
        padding: 60px 20px;
    `,
    emptyText: css`
        color: #888;
        font-size: 1rem;
    `,

    /* Favorites Grid */
    grid: css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    `,
    card: css`
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        background: #2d333b;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 173, 181, 0.25);
        }

        &:hover > div:last-child {
            opacity: 1;
        }
    `,
    cardImage: css`
        width: 100%;
        height: 280px;
        object-fit: cover;
        display: block;
    `,
    cardOverlay: css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        flex-direction: column;
        gap: 6px;
    `,
    cardTitle: css`
        color: #fff;
        font-size: 0.95rem;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
    cardScore: css`
        color: #ffd700;
        font-size: 0.85rem;
        font-weight: 600;
    `,
    removeBtn: css`
        color: #ff6b6b !important;
        font-size: 0.85rem;
        padding: 4px 0;
        display: flex;
        align-items: center;
        gap: 4px;

        &:hover {
            color: #ee4444 !important;
        }
    `,
    sectionHeader: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    `,
    createBtn: css`
        height: 40px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        background-color: #00ADB5 !important;
        border-color: #00ADB5 !important;

        &:hover {
            background-color: #1f7f84 !important;
            border-color: #1f7f84 !important;
        }
    `,
    modal: css`
        & .ant-modal-content {
            background-color: #222831 !important;
            border: 1px solid #393e46 !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
        }
        & .ant-modal-header {
            background-color: #222831 !important;
            border-bottom: 1px solid #393e46 !important;
        }
        & .ant-modal-title {
            color: #eeeeee;
            padding: 20px;
        }
        & .ant-modal-close {
            color: #eeeeee;
            padding-right: 20px;
            padding-top: 18px;
        }
        & .ant-modal-body {
            background-color: #222831 !important;
        }
        & .ant-modal-footer {
            display: flex;
            justify-content: center !important;
            padding: 20px !important;
            background-color: #222831 !important;
            border-top: 1px solid #393e46 !important;
        }
        & .ant-form-item-label > label {
            color: #eeeeee !important;
        }
        & .ant-input,
        & .ant-input-textarea textarea {
            background-color: #393e46 !important;
            color: white !important;
            border-color: #393e46 !important;
            &:hover, &:focus {
                border-color: #00ADB5 !important;
            }
        }
        & .ant-input::placeholder {
            color: rgba(255, 255, 255, 0.4) !important;
        }
        & .ant-btn-primary {
            background-color: #00ADB5 !important;
            border-color: #00ADB5 !important;
            &:hover {
                background-color: #1f7f84 !important;
            }
        }
        & .ant-modal-footer .ant-btn {
            font-size: 18px !important;
            padding: 15px !important;
        }
        & .ant-modal-footer .ant-btn-default {
            color: #eeeeee !important;
            
            border-color: #393e46 !important;
            background-color: transparent !important;
            &:hover {
                border-color: #00ADB5 !important;
                color: #00ADB5 !important;
            }
        }
    `,
});
