export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pages: {
        Row: {
          id: number
          title: string
          slug: string
          created_at: string
          updated_at: string
        }
      }
      posts: {
        Row: {
          id: number
          title: string
          slug: string
          content: Json
          created_at: string
          updated_at: string
        }
      }
      categories: {
        Row: {
          id: number
          title: string
          parent_id: number | null
          created_at: string
          updated_at: string
        }
      }
      forms: {
        Row: {
          id: number
          title: string
          confirmation_type: 'message' | 'redirect'
          confirmation_message: Json | null
          redirect_url: string | null
          submit_button_label: string | null
          created_at: string
          updated_at: string
        }
      }
      form_submissions: {
        Row: {
          id: number
          form_id: number
          created_at: string
          updated_at: string
        }
      }
      media: {
        Row: {
          id: number
          filename: string
          alt: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}
