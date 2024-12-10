// src/types/index.ts
export interface AppData {
    ID: number;
    app_id: string;
    title: string;
    description: string;
    has_posts: boolean;
    accept_welcome_message: boolean;
    welcome_message_content: string;
}

export interface TsfmData {
    theosummaFrontendUrl: string;
    nonce: string;
    locale: string;
    restBaseEndpoint: string;
    postTypesEndpoint: string;
    authEndpoint: string;
    threadEndpoint: string;
    appCrudEndpoint: string;
    appRelatedPostTypesEndpoint: string;
    getAppPosts: string;
    syncAppPosts: string;
    syncingStatusEndpoint: string;
}

export interface RelatedPostTypes {
    post_types: string[];
}

export interface PostTypeSyncingStatus {
    post_type: string;
    total_posts: number;
    total_prepared_posts: number;
    unsynced_posts: number;
}

export interface PostTypePost {
    post_id: number;
    post_title: string;
}

export interface WPPostType {
    name: string;                  // Machine name of the post type (e.g., "post", "page")
    slug: string;                  // Slug of the post type (usually same as `name`)
    description: string;           // Description of the post type
    hierarchical: boolean;         // Whether the post type supports hierarchy (e.g., pages)
    rest_base: string;             // REST API base route for the post type
    rest_namespace: string;        // REST API namespace for the post type
    supports: {                    // Features supported by the post type
        title?: boolean;
        editor?: boolean;
        excerpt?: boolean;
        author?: boolean;
        thumbnail?: boolean;
        comments?: boolean;
        trackbacks?: boolean;
        custom_fields?: boolean;
        revisions?: boolean;
        page_attributes?: boolean;
        post_formats?: boolean;
    };
    labels: {                      // Display labels for the post type
        name: string;
        singular_name: string;
        add_new: string;
        add_new_item: string;
        edit_item: string;
        new_item: string;
        view_item: string;
        search_items: string;
        not_found: string;
        not_found_in_trash: string;
        parent_item_colon?: string; // Optional for hierarchical post types
        all_items: string;
        archives: string;
        attributes: string;
        insert_into_item: string;
        uploaded_to_this_item: string;
        featured_image: string;
        set_featured_image: string;
        remove_featured_image: string;
        use_featured_image: string;
        filter_items_list: string;
        items_list_navigation: string;
        items_list: string;
        name_admin_bar: string;
    };
    _links?: {                     // Links related to the post type (optional, depends on response)
        self: { href: string }[];
        collection: { href: string }[];
    };
}

