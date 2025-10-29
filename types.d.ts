/**
 * Eleventy Configuration Types
 * @see https://www.11ty.dev/docs/config/
 */
/** biome-ignore-all lint/suspicious/noConfusingVoidType: this is as good as it gets */
/** biome-ignore-all lint/suspicious/noExplicitAny: better than nothing */

declare module '@11ty/eleventy' {
  export interface EleventyConfig {
    /**
     * Add static files to be copied to output directory
     * @see https://www.11ty.dev/docs/copy/
     */
    addPassthroughCopy(path: string | Record<string, string>): void;

    /**
     * Add a template collection
     * @see https://www.11ty.dev/docs/collections/
     */
    addCollection(name: string, callback: (collectionApi: any) => any): void;

    /**
     * Add a universal filter (works in all template languages)
     * @see https://www.11ty.dev/docs/filters/
     */
    addFilter(name: string, callback: (...args: any[]) => any): void;

    /**
     * Add a Nunjucks-specific filter
     * @see https://www.11ty.dev/docs/filters/
     */
    addNunjucksFilter(name: string, callback: (...args: any[]) => any): void;

    /**
     * Add a Liquid-specific filter
     * @see https://www.11ty.dev/docs/filters/
     */
    addLiquidFilter(name: string, callback: (...args: any[]) => any): void;

    /**
     * Add a JavaScript template function
     * @see https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions
     */
    addJavaScriptFunction(name: string, callback: (...args: any[]) => any): void;

    /**
     * Add a universal shortcode (works in all template languages)
     * @see https://www.11ty.dev/docs/shortcodes/
     */
    addShortcode(name: string, callback: (...args: any[]) => string | Promise<string>): void;

    /**
     * Add a universal paired shortcode (with opening and closing tags)
     * @see https://www.11ty.dev/docs/shortcodes/
     */
    addPairedShortcode(name: string, callback: (content: string, ...args: any[]) => string | Promise<string>): void;

    /**
     * Add a Nunjucks-specific shortcode
     * @see https://www.11ty.dev/docs/shortcodes/
     */
    addNunjucksShortcode(name: string, callback: (...args: any[]) => string | Promise<string>): void;

    /**
     * Add a Nunjucks-specific async shortcode
     * @see https://www.11ty.dev/docs/shortcodes/
     */
    addNunjucksAsyncShortcode(name: string, callback: (...args: any[]) => Promise<string>): void;

    /**
     * Add a Liquid-specific shortcode
     * @see https://www.11ty.dev/docs/shortcodes/
     */
    addLiquidShortcode(name: string, callback: (...args: any[]) => string | Promise<string>): void;

    /**
     * Add a transform to modify output
     * @see https://www.11ty.dev/docs/transforms/
     */
    addTransform(name: string, callback: (content: string, outputPath: string) => string | Promise<string>): void;

    /**
     * Add a linter to check output
     * @see https://www.11ty.dev/docs/linters/
     */
    addLinter(name: string, callback: (content: string, inputPath: string, outputPath: string) => void): void;

    /**
     * Add a layout alias
     * @see https://www.11ty.dev/docs/layouts/#layout-aliasing
     */
    addLayoutAlias(from: string, to: string): void;

    /**
     * Add global data available to all templates
     * @see https://www.11ty.dev/docs/data-global/
     */
    addGlobalData(name: string, data: any): void;

    /**
     * Add a plugin
     * @see https://www.11ty.dev/docs/plugins/
     */
    addPlugin(plugin: any, options?: any): void;

    /**
     * Add a watch target (files to watch for changes)
     * @see https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
     */
    addWatchTarget(path: string): void;

    /**
     * Set the input directory
     * @see https://www.11ty.dev/docs/config/#input-directory
     */
    setInputDirectory(dir: string): void;

    /**
     * Set the output directory
     * @see https://www.11ty.dev/docs/config/#output-directory
     */
    setOutputDirectory(dir: string): void;

    /**
     * Set the data directory
     * @see https://www.11ty.dev/docs/config/#directory-for-global-data-files
     */
    setDataDirectory(dir: string): void;

    /**
     * Set the includes directory
     * @see https://www.11ty.dev/docs/config/#directory-for-includes
     */
    setIncludesDirectory(dir: string): void;

    /**
     * Set the layouts directory
     * @see https://www.11ty.dev/docs/config/#directory-for-layouts
     */
    setLayoutsDirectory(dir: string): void;

    /**
     * Set whether to use .gitignore patterns
     * @see https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore
     */
    setUseGitIgnore(enabled: boolean): void;

    /**
     * Set template formats to process
     * @see https://www.11ty.dev/docs/config/#template-formats
     */
    setTemplateFormats(formats: string | string[]): void;

    /**
     * Add template formats to the existing list
     * @see https://www.11ty.dev/docs/config/#template-formats
     */
    addTemplateFormats(formats: string | string[]): void;

    /**
     * Ignore specific files or patterns
     * @see https://www.11ty.dev/docs/ignores/
     */
    ignores: Set<string>;

    /**
     * Add a file extension handler
     * @see https://www.11ty.dev/docs/languages/custom/
     */
    addExtension(extension: string | string[], options: {
      key?: string;
      compile?: (inputContent: string, inputPath: string) => (data: any) => string | Promise<string>;
      compileOptions?: any;
      getData?: boolean | string[];
      getInstanceFromInputPath?: (inputPath: string) => any;
      init?: () => void | Promise<void>;
      read?: boolean;
    }): void;

    /**
     * Add a data file extension handler
     * @see https://www.11ty.dev/docs/data-custom/
     */
    addDataExtension(extensions: string, parser: (content: string, filePath: string) => any): void;

    /**
     * Set server options for the dev server
     * @see https://www.11ty.dev/docs/dev-server/
     */
    setServerOptions(options: {
      port?: number;
      showAllHosts?: boolean;
      showVersion?: boolean;
      encoding?: string;
      domDiff?: boolean;
    }): void;

    /**
     * Set Liquid options
     * @see https://www.11ty.dev/docs/languages/liquid/#liquid-options
     */
    setLiquidOptions(options: any): void;

    /**
     * Set Nunjucks options
     * @see https://www.11ty.dev/docs/languages/nunjucks/#nunjucks-options
     */
    setNunjucksEnvironmentOptions(options: any): void;

    /**
     * Set front matter parsing options
     * @see https://www.11ty.dev/docs/data-frontmatter/
     */
    setFrontMatterParsingOptions(options: any): void;

    /**
     * Set whether to enable quiet mode (less console output)
     * @see https://www.11ty.dev/docs/config/#enable-quiet-mode-to-reduce-console-noise
     */
    setQuietMode(enabled: boolean): void;

    /**
     * Set data deep merge behavior
     * @see https://www.11ty.dev/docs/data-deep-merge/
     */
    setDataDeepMerge(enabled: boolean): void;

    /**
     * Add a URL transform
     * @see https://www.11ty.dev/docs/transforms/#url-transforms
     */
    addUrlTransform(callback: (page: any) => void): void;

    /**
     * Set the server passthrough copy behavior
     * @see https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve
     */
    setServerPassthroughCopyBehavior(behavior: 'copy' | 'passthrough'): void;

    /**
     * Access to event emitter for build lifecycle events
     * @see https://www.11ty.dev/docs/events/
     */
    on(eventName: string, callback: (...args: any[]) => void | Promise<void>): void;
  }

  /**
   * Return type for Eleventy configuration function
   * @see https://www.11ty.dev/docs/config/#configuration-options
   */
  export interface EleventyReturnValue {
    /**
     * Directory configuration
     */
    dir?: {
      input?: string;
      output?: string;
      includes?: string;
      layouts?: string;
      data?: string;
    };

    /**
     * Template formats to process
     */
    templateFormats?: string[];

    /**
     * Path prefix for URLs (useful for GitHub Pages)
     * @see https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
     */
    pathPrefix?: string;

    /**
     * HTML template engine
     */
    htmlTemplateEngine?: 'liquid' | 'njk' | 'js' | false;

    /**
     * Markdown template engine
     */
    markdownTemplateEngine?: 'liquid' | 'njk' | 'js' | false;

    /**
     * Data template engine
     */
    dataTemplateEngine?: 'liquid' | 'njk' | 'js' | false;
  }
}

/**
 * Type for the Eleventy configuration function
 * @see https://www.11ty.dev/docs/config/
 */
declare module '*.eleventy.js' {
  import type { EleventyConfig, EleventyReturnValue } from '@11ty/eleventy';
  
  const config: (eleventyConfig: EleventyConfig) => (void | EleventyReturnValue);
  export = config;
}
