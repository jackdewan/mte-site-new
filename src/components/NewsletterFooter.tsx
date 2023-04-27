import { Button } from "@/stories/Button";
import { InputField } from "./InputField";

export const NewsletterFooter = () => {
  return (
    <div className="space-y-4 lg:space-y-6 max-w-md">
      <h3 className="text-3xl xl:text-4xl font-neutra2">
        Subscribe to Our Newsletter
      </h3>
      <div>
        <InputField
          label="Newsletter"
          id="newsletter_footer"
          required
          placeholder="janedoe@example.com"
          hideLabel
          dark
        />
      </div>
      <div className="sm:max-w-xs">
        <Button label="Subscribe" primary dark fullWidth />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur integer platea nec cum venenatis.
      </p>
    </div>
  );
};
